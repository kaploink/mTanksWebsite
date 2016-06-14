/* eslint-disable spaced-comment */
/* eslint-disable */
// libs
import React from 'react';

// lib components
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

// common components
import Section, {Title, Buttons, Button} from '../_common/Section/Section';
import Box from '../_common/Box/Box';

// styles
const _s = require('./Pictures.scss');

// const Pictures = () =>
//   <Section className={_s.this}>
//     <Title>Pretty Pictures</Title>
//     <div>
//       {Array(6).map(() =>
//         <div>A</div>
//       )}
//     </div>
//     <div>blah</div>
//     <Box childWidth="1/3">
//       {
//       <Box><img style={styles.image} src={require('./1.png')}/></Box>
//       <Box><img style={styles.image} src={require('./2.png')}/></Box>
//       <Box><img style={styles.image} src={require('./1.png')}/></Box>
//       <Box><img style={styles.image} src={require('./2.png')}/></Box>
//       <Box><img style={styles.image} src={require('./1.png')}/></Box>
//       <Box><img style={styles.image} src={require('./2.png')}/></Box>
//       <Box><img style={styles.image} src={require('./1.png')}/></Box>
//       <Box><img style={styles.image} src={require('./2.png')}/></Box>
//       }
//     </Box>

//     <p className={_s.description}>mTanks II Arena is a high-speed multiplayer RTS/FPS/racer with a focus on core gameplay and community-engineered maps</p>
//     <Buttons>
//       <Button linkButton href="/pictures" label="More pictures >" secondary backgroundColor="none" />
//     </Buttons>
//   </Section>
// ;

//export default Pictures;


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 400,
    // overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: require('./1.png'),
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: require('./3.png'),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: require('./1.png'),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: require('./2.png'),
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: require('./1.png'),
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: require('./1.png'),
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: require('./1.png'),
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: require('./1.png'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const Pictures = () =>
  <Section className={_s.this}>
    <Title>Pretty Pictures</Title>
    <div style={styles.root}>
      <GridList
        cols={2}
        cellHeight={200}
        padding={1}
        style={styles.gridList}
      >
        {tilesData.map(tile => (
          <GridTile
            key={tile.title}
            title={tile.title}
            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
            actionPosition="left"
            titlePosition="top"
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    <Buttons>
      <Button linkButton href="/pictures" label="More pictures >" secondary backgroundColor="none" />
    </Buttons>
  </Section>
;

export default Pictures;