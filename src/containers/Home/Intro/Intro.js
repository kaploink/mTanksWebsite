/* eslint-disable spaced-comment */
/* eslint-disable */
// libs
import React from 'react';

// lib components
import FlatButton from 'material-ui/lib/flat-button';

// common components
import Section, {Title, Buttons, Button} from '../_common/Section/Section';

// styles
const _s = require('./Intro.scss');

const Intro = () =>
  <Section className={_s.this}>
    {/*<Title>What it is</Title>*/}
    <p className={_s.description}>mTanks II Arena is a high-speed multiplayer RTS/FPS/racer with a focus on core gameplay and community-engineered maps</p>
    {/*<Buttons>
      <FlatButton linkButton href="/intro" label="More intro >" secondary backgroundColor="none" />
    </Buttons>*/}
  </Section>
;

export default Intro;
