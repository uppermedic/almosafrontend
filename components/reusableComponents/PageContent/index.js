import React from 'react';
import { Container } from 'reactstrap';
import { i18n } from 'root/i18n';
import {
  PostContent,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';

const PageContent = ({ itemContent }) => {
  const { language } = i18n;

  const ImgFile =
    itemContent?.files?.length > 0 &&
    itemContent?.files.filter(
      file => file.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) != null
    );

  const pdfFile =
    itemContent?.files?.length > 0 &&
    itemContent?.files
      .filter(file => file.toLowerCase().match(/\.(pdf)$/) != null)
      .map(
        attch =>
          `<div><a href=${encodeURI(attch)} target="_blank">${attch}</a><div>`
      );

  const youtube =
    itemContent?.page_items?.length > 0 &&
    itemContent?.page_items[0]?.url?.includes('youtube')
      ? itemContent?.page_items[0]?.url
      : '';

  const Content =
    pdfFile?.length > 0
      ? [itemContent[language]?.content, ...pdfFile]
      : [itemContent[language]?.content];

  // Array.isArray(itemContent?.page_items) ? (
  //   <PostContentWithCards
  //     title={itemContent[language]?.title}
  //     color="#55B047"
  //     paragraphs={Content}
  //     items={itemContent?.page_items}
  //   />
  return (
    <section className="dynamic-content">
      {itemContent && language && (
        <>
          {ImgFile?.length > 0 ? (
            <PostWithRightImg
              title={itemContent[language]?.title}
              color="#55B047"
              paragraphs={Content}
              theImg={ImgFile}
              theVideo={youtube}
            />
          ) : (
            <PostContent
              title={itemContent[language]?.title}
              color="#55B047"
              paragraphs={Content}
              theVideo={youtube}
            />
          )}
        </>
      )}
    </section>
  );
};

export default PageContent;
