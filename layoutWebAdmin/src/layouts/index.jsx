import React from 'react';
import { STATIC_MAIN_LAYOUT, STATIC_PUBLIC_LAYOYT } from '../constants/statics';
import Main from './Main';
import Public from './Public';

function Layout({ keyProp = STATIC_MAIN_LAYOUT, children }) {
  const renderLayout = (key) => {
    switch (key) {
      case STATIC_MAIN_LAYOUT:
        return <Main>{children}</Main>;  // Pass `children` to the Main layout
      case STATIC_PUBLIC_LAYOYT:
        return <Public>{children}</Public>;  // Ensure `children` are passed here too
      default:
        return <Main>{children}</Main>;  // Fallback to Main layout
    }
  };

  return renderLayout(keyProp);
}

export default Layout;
