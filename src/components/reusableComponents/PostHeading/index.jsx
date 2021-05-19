import React from 'react';

const PostHeading = ({ title, color }) => {
  return (
    <h2 className="post_title" style={{ color: color, borderColor: color }}>
      {title}
    </h2>
  );
};

export default PostHeading;
