// libs
import React from 'react';
import cx from 'classnames';

// lib components
import FlatButton from 'material-ui/lib/flat-button';

// styles
import _s from './Section.scss';

const Title = ({className, children, ...other}) =>
  <div className={cx(_s.title, className)} {...other}>
    {children}
  </div>
;

const Buttons = ({className, children, ...other}) =>
  <div className={cx(_s.buttons, className)} {...other}>
    {children}
  </div>
;

const Button = ({className, children, ...other}) =>
  <FlatButton linkButton secondary backgroundColor="none"
    className={cx(_s.button, className)} {...other}
  >
    {children}
  </FlatButton>
;

export default ({className, children}) =>
  <div className={cx(_s.this, className)}>{children}</div>
;

export {Title, Buttons, Button};
