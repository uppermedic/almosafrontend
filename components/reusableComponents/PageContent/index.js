import React from 'react';
import {
  PostContent,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';
import { useRouter } from 'next/router';

const PageContent = ({ itemContent }) => {
  const router = useRouter();
  const { locale } = router;

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
      ? [itemContent[locale]?.content, ...pdfFile]
      : [itemContent[locale]?.content];

  // Array.isArray(itemContent?.page_items) ? (
  //   <PostContentWithCards
  //     title={itemContent[locale]?.title}
  //     color="#55B047"
  //     paragraphs={Content}
  //     items={itemContent?.page_items}
  //   />
  return (
    <section className="dynamic-content">
      {itemContent && locale && (
        <>
          {ImgFile?.length > 0 ? (
            <PostWithRightImg
              title={itemContent[locale]?.title}
              color="#55B047"
              paragraphs={Content}
              theImg={ImgFile}
              theVideo={youtube}
            />
          ) : (
            <PostContent
              title={itemContent[locale]?.title}
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
