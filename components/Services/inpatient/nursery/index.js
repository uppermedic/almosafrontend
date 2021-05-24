import React from 'react';
import Hero from 'src/components/layout/Hero';
import PageHeading from 'src/components/Services/inpatient/reusable-page-heading/index.js';
import ColumnsOfText from 'src/components/Services/inpatient/re-columns-text/index.js';
import ReusableTabs from 'src/components/Services/re-tabs/index.js';
import BlockElement from 'src/components/Services/medical-programs/reusable-element/index.js';
import { Container } from 'next/app';

const Content = () => {
  return (
    <div className="coronary-unit-content">
      <Hero bg="/images/services/inpatient-units/coronary-unit/coronary-unit.png">
        <PageHeading title="Nursery & Neonatal Intensive Care Unit (NICU)" />
      </Hero>
      <ColumnsOfText data={data.columnsOfText} />
      <ReusableTabs data={data.tabsData} />
    </div>
  );
};

export default Content;

const data = {
  columnsOfText: [
    {
      text: (
        <div>
          <p>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis quam explicabo adipisci
            repudiandae illum exercitationem consequatur
          </p>
        </div>
      )
    },
    {
      text: (
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis
          </p>
        </div>
      )
    }
  ],
  tabsData: [
    {
      title: 'Services Offered',
      content: (
        <>
          <p className="green-txt">
            We provide round the clock care for advanced forms of heart disease
            including:
          </p>
          <ul>
            <li>Acute Heart Attack.</li>
            <li>Acute heart failure.</li>
            <li>Post cardiac</li>
            <li>Post cardiac catheterization patients. </li>
            <li>Post open heart surgery patients.</li>
            <li>
              Abnormal heart rhythm (arrhythmia) that’s not under control.
            </li>
            <li>Respiratory failure and other breathing problems.</li>
            <li>All congenital heart conditions.</li>
          </ul>
          <BlockElement title="lorem title" titleBg="#55B047" titleColor="#fff">
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>
          </BlockElement>
          <BlockElement title="lorem title" titleBg="#55B047" titleColor="#fff">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </BlockElement>
        </>
      )
    },
    {
      title: 'Our Physicians',
      content: (
        <>
          <p className="green-txt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            recusandae.
          </p>
          <ul>
            <li>Acute Heart Attack.</li>
            <li>Acute heart failure.</li>
            <li>Post cardiac</li>
            <li>Post cardiac catheterization patients. </li>
            <li>Post open heart surgery patients.</li>
          </ul>
          <h2 className="green-txt">Hello From This thing</h2>
        </>
      )
    }
  ]
};
