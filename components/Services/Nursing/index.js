import React from 'react';
import { PostContent } from 'src/components/reusableComponents/Post';
import { useRouter } from 'next/router';

const Nursing = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="nursing" id="nursing-section">
      {data && locale && (
        <PostContent
          title={data[locale]?.title}
          color="#55B047"
          paragraphs={[data[locale]?.excerpt]}
        />
      )}
    </section>
  );
};

export default Nursing;
