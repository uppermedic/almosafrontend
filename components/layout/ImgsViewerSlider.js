import React, { useState, useEffect } from 'react';
import ImgsViewer from 'react-images-viewer';

const ImageSlider = ({ images, open, handleClose, imageIndex }) => {
  const imgS = images.map(url => {
    return { src: url };
  });

  const [currImg, setcurrImg] = useState(0);

  useEffect(() => {
    setcurrImg(imageIndex);
    return () => {};
  }, [imageIndex]);

  const closeImgsViewer = () => {
    setcurrImg(0);
    handleClose();
  };

  const gotoPrev = () => {
    setcurrImg(currImg - 1);
  };
  const gotoNext = () => {
    setcurrImg(currImg + 1);
  };
  const gotoImg = index => {
    setcurrImg(index);
  };
  const handleClickImg = () => {
    if (currImg === images.length - 1) return;
    gotoNext();
  };

  return (
    <ImgsViewer
      backdropCloseable
      currImg={currImg}
      imgs={imgS}
      isOpen={open}
      onClickImg={handleClickImg}
      onClickNext={gotoNext}
      onClickPrev={gotoPrev}
      onClickThumbnail={gotoImg}
      onClose={closeImgsViewer}
      showThumbnails={true}
    />
  );
};

export default ImageSlider;
