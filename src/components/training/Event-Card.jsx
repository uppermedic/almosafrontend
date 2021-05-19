import React from "react";
import { Link } from "root/i18n";

const Event_Card = ({ cardData }) => {
  return (
    <Link href={cardData.eventInfo}>
      <div className="card" style={{ backgroundImage: `url(${cardData.bg})` }}>
        <div className="event-date">
          <p>{cardData.eventDate.slice(0, 2)}</p>
          <p>{cardData.eventDate.slice(2)}</p>
        </div>
        <div className="banner">
          <div>
            <h3>{cardData.eventTitle}</h3>
            <p>{cardData.eventDescription}</p>
          </div>
          <div className="px-3">
            <p>End {cardData.eventEnd}</p>
            <p>Cost : {cardData.eventCost}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event_Card;
