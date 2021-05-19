import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card-item">
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Card;
