import React from 'react';

import _s from './Box.scss';

export default ({children, style, childStyle, ...others}) => (
  <div style={{
    display: 'flex',
    ...style
  }} others>
  {/*
    children.map((child) =>
      <child/>
    )
  */}
    {children}
  </div>
);
