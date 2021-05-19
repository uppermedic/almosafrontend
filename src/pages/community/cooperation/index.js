import React from 'react';
import {
  PostWithLeftImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Hero from 'src/components/layout/Hero';

const Cooperation = () => {
  return (
    <section className="cooperation">
      <Hero bg="https://images.unsplash.com/photo-1606236989668-fd29f1c32251?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80">
        <div className="container">
          <div className="top_left_title">
            <h2>التعاون مع الأسر المنتجة</h2>
            <h2>Cooperation with Produsctive Familes</h2>
          </div>
        </div>
        <div className="right_ticket">
          <div className="title">
            <h2> مستشفي الموسي التخصصي </h2>
            <h2> Almoosa Specialist Hospital </h2>
          </div>
          <div className="logo">
            <img src="/images/logo.jpg" />
          </div>
        </div>
      </Hero>
      <PostWithLeftImg
        title="COOPERATION WITH PRODUCTIVE FAMILIES"
        color="#55B047"
        theImg="https://images.unsplash.com/photo-1605619227865-f8af18dfeab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80"
        paragraphs={[
          'A contract was signed with the Al-Ber Charity organization to help some productive families. The experiment aims to provide a stable source of income that guarantees a decent life for families. It was agreed to conclude a contract with Maamoul Jusoor, to provide hospitality to patients and visitors, in addition to a group of seamstresses to sew a small bag in which the child’s needs are placed and distributed to mothers as a gift after birth.'
        ]}
      />
      <PostWithCenterImg
        title="The Impact:"
        subTitles={['Six families benefited from the program.']}
        color="#1E455C"
        theImg="https://images.unsplash.com/photo-1605619227865-f8af18dfeab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80"
        paragraphs={[
          ' Some of them paid their debts, and some of them fulfilled their dream of buying a car, and many of them had a comfortable financial condition- the purchase of supplies for the holidays and school became more leisurely'
        ]}
      />
    </section>
  );
};

export default Cooperation;
