import React from "react";
import EventInfo from "src/components/training/event-info";
import Head from "src/components/layout/head";

const event = () => {
  return (
    <div>
      <Head title="Event Information"></Head>
      <EventInfo />
    </div>
  );
};

export default event;
