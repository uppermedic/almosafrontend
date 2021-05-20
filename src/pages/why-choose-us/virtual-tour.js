import React from 'react';
import Head from 'src/components/layout/head';
import VirtualHosptialTour from 'src/components/why-Us/virtual-tour';

export default function Virtual_Tour() {
  return (
    <div className="virtual-tour">
      <Head title="Virtual Hospital Tour"></Head>
      <VirtualHosptialTour />
    </div>
  );
}
