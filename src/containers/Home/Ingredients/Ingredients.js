/* eslint-disable spaced-comment */
/* eslint-disable */
// libs
import React from 'react';

// lib components
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const Avatar = require('material-ui/lib/avatar');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
import FlatButton from 'material-ui/lib/flat-button';


// common components
import Section, {Title, Buttons, Button} from '../_common/Section/Section';
import Box from '../_common/Box/Box';

// styles
import _s from './Ingredients.scss';


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

const Description = ({children}) =>
  <div className={_s.description}>{children}</div>
;

const data = [
  {
    title: 'Core Gameplay',
    description: 'mTanks II Arena draws gameplay ingredients from a variety of genres, then combines and distills them down into a simple coherent experience.',
    items: [
      {
        title: 'RTS',
        points: [
          'Army building using clone ability',
          'Base building using turret ability',
        ],
        influences: 'Starcraft'
      },
      {
        title: 'FPS',
        points: [
          '1',
          '2',
        ],
        influences: 'Quake III Arena'
      },
      {
        title: 'Racing',
        points: [
          '1',
          '2',
        ],
        influences: 'Colin McRae Rally'
      },
      {
        title: 'RTS',
        points: [
          'Army building using clone ability',
          'Base building using turret ability',
        ],
        influences: 'Starcraft'
      },
      {
        title: 'FPS',
        points: [
          '1',
          '2',
        ],
        influences: 'Quake III Arena'
      },
      {
        title: 'Racing',
        points: [
          '1',
          '2',
        ],
        influences: 'Colin McRae Rally'
      },
    ]
  },
];

const Ingredients = () =>
  <div>
    {data.map(section =>
      <Section className={_s.this}>
        <Title>{section.title}</Title>
        <Description className={_s.section__description}>{section.description}</Description>
        <Box style={{flexWrap: 'wrap', alignItems: 'center'}}>
          {section.items.map(item =>
            <div>
              {/*
                <Card style={{width: 300, margin: 10}}>
                  <CardMedia overlay={<CardTitle title={item.title}/>}>
                    <img src={require('./1.png')}/>
                  </CardMedia>
                  <CardText style={{background: 'black', color: 'white'}}>
                    {item.points.map(point =>
                      <div>{point}</div>
                    )}
                    <div>key influence: {item.influences}</div>
                  </CardText>
                </Card>
              */}
              <Box style={{width: 300, margin: '40px 20px', flexDirection: 'column'}}>
                <div className={_s.item__title}>{item.title}</div>
                <Box style={{flexDirection: 'column'}}>
                  <div className={_s.item__points}>
                    {item.points.map(point =>
                      <div>{point}</div>
                    )}
                  </div>
                  <div className={_s.item__influence}>key influence: {item.influences}</div>
                </Box>
                <Box style={{width: 300, marginTop: 16}}>
                  <img src={require('./1.png')} style={{width: '100%', height: 170}}/>
                </Box>
              </Box>
            </div>
          )}
        </Box>
      </Section>
    )}
  </div>
;




export default Ingredients;
