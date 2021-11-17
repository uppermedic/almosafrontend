import React, { useEffect, Fragment } from 'react';

export default function pay({ data, error }) {
  return <div>sadasd</div>;
}

export async function getServerSideProps(context) {
  const https = require('https');

  const request = async () => {
    var path = context.query.resourcePath;
    path += '?entityId=8a8294174b7ecb28014b9699220015ca';
    const options = {
      port: 443,
      host: 'test.oppwa.com',
      path: path,
      method: 'GET',
      headers: {
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
      postRequest.end();
    });
  };

  request().then(console.log).catch(console.error);

  let { data, error } = await request()
    .then(data => ({ data, error: false }))
    .catch(e => ({ data: false, error: e }));
  return {
    props: { data: data, error }
  };
}
