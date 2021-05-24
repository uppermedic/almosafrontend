import React from 'react';
import Footer from './Footer';
import FooterRights from './FooterRights';
import { useRouter } from 'next/router';
import CN from 'classnames';

export default function index(props) {
  const Router = useRouter();
  return (
    <footer>
      <Footer
        {...props}
        customClass={CN({ 'home-footer': Router.pathname == '/' })}
      />
      <FooterRights {...props} />
    </footer>
  );
}
