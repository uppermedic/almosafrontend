import React from 'react';
import Hero from 'src/components/layout/Hero';
import PageHeading from 'src/components/Services/inpatient/reusable-page-heading/index.js';
import ColumnsOfText from 'src/components/Services/inpatient/re-columns-text/index.js';
import ReusableTabs from 'src/components/Services/re-tabs/index.js';

const Content = () => {
  return (
    <div className="coronary-unit-content">
      <Hero bg="/images/services/inpatient-units/coronary-unit/coronary-unit.png">
        <PageHeading title="Coronary care Unit (CCU)" />
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis quam explicabo adipisci
            repudiandae illum exercitationem consequatur id, perspiciatis amet,
            aut repellat optio voluptatum porro non fugit!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis quam explicabo adipisci
            repudiandae illum exercitationem consequatur id, perspiciatis amet,
            aut repellat optio voluptatum porro non fugit!
          </p>
        </div>
      )
    },
    {
      text: (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis quam explicabo adipisci
            repudiandae illum exercitationem consequatur id, perspiciatis amet,
            aut repellat optio voluptatum porro non fugit!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aspernatur error voluptatibus reiciendis quam explicabo adipisci
            repudiandae illum exercitationem consequatur id, perspiciatis amet,
            aut repellat optio voluptatum porro non fugit!
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
