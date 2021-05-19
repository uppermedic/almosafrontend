import React from 'react';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Hero from 'src/components/layout/Hero';
import SmallGallery from 'src/components/SmallGallery';

const TasteOfArt = () => {
  return (
    <section className="taste_of_art">
      <Hero bg="/images/community/tastOfArt/Hero.png" />
      <PostWithCenterImg
        title="Sponsored by Almoosa Specialist Hospital – SASCA_HSA:"
        color="#67AF5A"
        paragraphs={[
          'The idea arose during the arrangements for the grand opening of the medical tower in 2013. our hospital sensed the need to beautify corridors of the',
          ' tower with paintings and artworks- from here, cooperation was made with SASCA_HSA, and the idea was transformed into a competition in which local artists ',
          'compete to present their works to encourage and support their talents.'
        ]}
      />

      <SmallGallery
        bgColor="#1E455C"
        imgs={[
          '/images/community/tastOfArt/Image 10.png',
          '/images/community/tastOfArt/Image 12.png'
        ]}
      />

      <PostWithCenterImg
        title="Objectives:"
        color="#1E455C"
        subTitles={[
          'More than 2000 works were received, including painting, photography, and calligraphy, of which we selected 200 works.',
          ' Rewards reached 400,000 Riyals.'
        ]}
      />

      <PostWithRightImg
        theImg="/images/community/tastOfArt/Mask Group 2.png"
        paragraphs={[
          'Support and encourage young talents, highlighting local artists, immortalizing their work, integrating art with therapy, in addition to',
          'raising the artistic taste of society by visually satisfying them with paintings and pictures of high quality and cultural value.'
        ]}
      />
    </section>
  );
};

export default TasteOfArt;

/*


*/
