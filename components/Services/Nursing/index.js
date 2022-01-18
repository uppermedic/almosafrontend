import React from 'react';
import { i18n } from 'root/i18n';
import { PostContent } from 'src/components/reusableComponents/Post';

const Nursing = ({ data }) => {
  const { language } = i18n;

  return (
    <section className="nursing" id="nursing-section">
      {data && language && (
        <PostContent
          title={data[language]?.title}
          color="#55B047"
          paragraphs={[data[language]?.excerpt]}
        />
      )}
    </section>
  );
};

export default Nursing;
