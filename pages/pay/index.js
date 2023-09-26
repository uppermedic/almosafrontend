import React, { Fragment } from 'react';
import Head from '../../components/layout/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function pay({ id, error, message, data }) {
  return (
    <div>
      {error ? (
        <p>Error occourred: {message}</p>
      ) : (
        <Fragment>
          <Head>
            <script
              src={`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${id}`}
            ></script>
          </Head>
          <form
            action="http://localhost:3000/pay/done"
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </Fragment>
      )}
    </div>
  );
}

export async function getServerSideProps({locale}) {
  const https = require('https');
  //entityId=8a8294174b7ecb28014b9699220015ca&
  const request = async () => {
    const path = '/v1/checkouts';
    const data =
      'entityId=8a8294174b7ecb28014b9699220015ca&amount=21&currency=EUR&paymentType=DB';
    const options = {
      port: 443,
      host: 'test.oppwa.com',
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
        Authorization:
          'Bearer OGE4Mjk0MTc0YjdlY2IyODAxNGI5Njk5MjIwMDE1Y2N8c3k2S0pzVDg='
      }
    };
    return new Promise((resolve, reject) => {
      const postRequest = https.request(options, function (res) {
        const buf = [];
        res.on('data', chunk => {
          buf.push(Buffer.from(chunk));
        });
        res.on('end', () => {
          const jsonString = Buffer.concat(buf).toString('utf8');
          try {
            resolve(JSON.parse(jsonString));
          } catch (error) {
            reject(error);
          }
        });
      });
      postRequest.on('error', reject);
      postRequest.write(data);
      postRequest.end();
    });
  };

  let { data, error } = await request()
    .then(data => ({ data, error: false }))
    .catch(e => ({ data: false, error: e }));
  if (!!error || !data.id) {
    let message = data ? data?.result?.description : 'error 404';
    return {
      props: {
        error: true,
        message,
        data,
        ...(await serverSideTranslations(locale, [
          'common',
          'about',
          'news',
          'menu',
          'header',
          'footer',
          'patient_guide'
        ]))
      }
    };
  }
  return {
    props: { id: data.id, error: false, message: data.result.description ,...(await serverSideTranslations(locale, [
      'common',
      'about',
      'news',
      'menu',
      'header',
      'footer',
      'patient_guide'
    ]))}
  };
}
