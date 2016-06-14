import React from 'react';

// lib components
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

// common components
import Box from '../_common/Box/Box';
import Section, {Title, Buttons, Button} from '../_common/Section/Section';

const _s = require('./SocialProof.scss');

const StarRating = ({rating}) => (
  <span>
    {Array(rating).fill().map(() =>
      <ActionGrade color="white"/>
    )}
  </span>
);

const Review = ({rating, comment}) =>
  <div style={{display: 'flex'}}>
    <StarRating rating={rating} />
    <span>{comment}</span>
  </div>
;


const SocialProof = () =>
  <Section className={_s.this}>
    <Title>Others reckon its good</Title>
    <div className={_s.content}>
      {
        [
          {rating: 5, comment: 'Best game ever...'},
          {rating: 4, comment: 'Pretty good...'},
          {rating: 5, comment: 'Amazing...'}
        ].map(review =>
          <Review {...review}/>
        )
      }
    </div>
    <CardActions style={{textAlign: 'right'}}>
      <FlatButton linkButton href="/reviews" label="More reviews >" secondary backgroundColor="none" />
      <Button href="/reviews" label="More reviews >"/>
    </CardActions>
  </Section>
;

export default SocialProof;
