import React from 'react';

import * as Styles from '../top-bar/styles';

const TopBar = ({ title }) => {
  return (
    <>
      <Styles.TopBarLayout>{title}</Styles.TopBarLayout>
    </>
  );
};

export default TopBar;
