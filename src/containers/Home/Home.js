/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable spaced-comment */
import React, { Component } from 'react';
import { Link } from 'react-router';

import { CounterButton, GithubButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';


// 3rd party components
import RaisedButton from 'material-ui/lib/raised-button';
//import FlatButton from 'material-ui/lib/flat-button';


const Avatar = require('material-ui/lib/avatar');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');

const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const ListDivider = require('material-ui/lib/lists/list-divider');

const ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
const ContentSend = require('material-ui/lib/svg-icons/content/send');
const ContentDrafts = require('material-ui/lib/svg-icons/content/drafts');
const ActionGrade = require('material-ui/lib/svg-icons/action/grade');
const ActionInfo = require('material-ui/lib/svg-icons/action/info');

const IconButton = require('material-ui/lib/icon-button');

const RefreshIndicator = require('material-ui/lib/refresh-indicator');


const styles = require('./Home.scss');

const Box = ({children, style, childrenStyle, ...others}) => (
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

const StarRating = ({rating}) => (
  <span>
    {Array(rating).fill().map(() =>
      <ActionGrade color="white"/>
    )}
  </span>
);

const FlatButton = ({children}) => (
  <button className={styles.button}>{children}</button>
);

// child components
import Title from './Title/Title';
import Intro from './Intro/Intro';
import Ingredients from './Ingredients/Ingredients';
//const SocialProof = () => <div>Social Proof</div>;
import SocialProof from './SocialProof/SocialProof';
import Pictures from './Pictures/Pictures';
// const Pictures = () => <div>Pictures</div>;
const Video = () => <div>Video</div>;
const Demo = () => <div>Demo</div>;
const SocialLinks = () => <div>Social Links</div>;

const Section = ({children}) => (
  <div style={{padding: 20, background: 'black'}}>{children}</div>
);

const SectionButtons = ({children}) => (
  <div style={{
    padding: 20,
    textAlign: 'right',
  }}>{children}</div>
);

const bs = {
  container: {
    background: 'hsla(0, 100%, 100%, 0.5)',
    display: 'flex',
  },
  cell: {
    background: 'white',
  }
};

export default class Home extends Component {
  render() {
    //const _s = styles;
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
          // <SubTitle className={_s.subTitle}>Others reckon it&quot;s good</SubTitle>

    return (
      <div className={styles.this}>
        <Helmet title="Home"/>
        <Title />
        <Intro />
        <Ingredients/>
        <div>
          menu...
        </div>

        <SocialProof />
        <Pictures />
        <Video />
        <Demo />
        <SocialLinks />
        <div className={styles.section + ' ' + styles.whatItIs}>
        </div>
        <div style={{padding: 20, background: '#f6f6f6'}}>
          <Card>
            <div style={{background: 'hsl(0,50%,50%)'}}>header</div>
            <CardHeader
              title="Title"
              subtitle="Subtitle"
              avatar={<Avatar>A</Avatar>}/>
            <CardHeader
              title="Demo Url Based Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"/>
            <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
              <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
            <CardTitle title="Title" subtitle="Subtitle"/>
            <CardActions style={{textAlign: 'right'}}>
              <FlatButton label="Action1" primary />
              <FlatButton label="Action2" primary />
            </CardActions>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>

        {/*
          <div className="containerz">
            <div className="cellz">1 long long long long long long long long long long long long long long long long long long long long long long long long long long long long</div>
            <div className="cellz">2</div>
            <div className="cellz">3</div>
          </div>

          <div className="box box--space-20" style={{color: 'black', backgroundColor: 'blue', border: '1px solid red', width: 400}}>
            <div className="cellz">
              <div className="innerCellz">
                1 long long long long long ish
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                2
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                3
              </div>
            </div>
          </div>

          <div className="box" style={{color: 'black', backgroundColor: 'blue', border: '1px solid red', width: 400}}>
            <div className="cellz">
              <div className="innerCellz">
                1 long long long long long ish
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                2
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                3
              </div>
            </div>
          </div>

          <div className="box box--space-20 box--even" style={{color: 'black', backgroundColor: 'blue', border: '1px solid red', width: 400}}>
            <div className="cellz">
              <div className="innerCellz">
                1 long long long long long ish
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                2
              </div>
            </div>
            <div className="cellz">
              <div className="innerCellz">
                3
              </div>
            </div>
          </div>

          <div className="box box--space-20" style={{color: 'black', backgroundColor: 'blue', border: '1px solid red', width: 400}}>
            <div className="cellz width--1-2">
              <div className="innerCellz">
                1 long long long long long ish
              </div>
            </div>
            <div className="cellz width--1-4">
              <div className="innerCellz">
                2
              </div>
            </div>
            <div className="cellz width--1-4">
              <div className="innerCellz">
                3
              </div>
            </div>
          </div>
        */}


        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://github.com/erikras/react-redux-universal-hot-example"
                 target="_blank">
                <i className="fa fa-github"/> View on Github
              </a>
            </p>
            <GithubButton user="erikras"
                          repo="react-redux-universal-hot-example"
                          type="star"
                          width={160}
                          height={30}
                          count large/>
            <GithubButton user="erikras"
                          repo="react-redux-universal-hot-example"
                          type="fork"
                          width={160}
                          height={30}
                          count large/>

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/erikras" target="_blank">@erikras</a>.
            </p>
          </div>
        </div>
        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>

          <p>This starter boilerplate app uses the following technologies:</p>

          <ul>
            <li>
              <del>Isomorphic</del>
              {' '}
              <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal</a> rendering
            </li>
            <li>Both client and server make calls to load data from separate API server</li>
            <li><a href="https://github.com/facebook/react" target="_blank">React</a></li>
            <li><a href="https://github.com/rackt/react-router" target="_blank">React Router</a></li>
            <li><a href="http://expressjs.com" target="_blank">Express</a></li>
            <li><a href="http://babeljs.io" target="_blank">Babel</a> for ES6 and ES7 magic</li>
            <li><a href="http://webpack.github.io" target="_blank">Webpack</a> for bundling</li>
            <li><a href="http://webpack.github.io/docs/webpack-dev-middleware.html" target="_blank">Webpack Dev Middleware</a>
            </li>
            <li><a href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank">Webpack Hot Middleware</a></li>
            <li><a href="https://github.com/rackt/redux" target="_blank">Redux</a>'s futuristic <a
              href="https://facebook.github.io/react/blog/2014/05/06/flux.html" target="_blank">Flux</a> implementation
            </li>
            <li><a href="https://github.com/gaearon/redux-devtools" target="_blank">Redux Dev Tools</a> for next
              generation DX (developer experience).
              Watch <a href="https://www.youtube.com/watch?v=xsSnOQynTHs" target="_blank">Dan Abramov's talk</a>.
            </li>
            <li><a href="https://github.com/rackt/redux-router" target="_blank">Redux Router</a> Keep
              your router state in your Redux store
            </li>
            <li><a href="http://eslint.org" target="_blank">ESLint</a> to maintain a consistent code style</li>
            <li><a href="https://github.com/erikras/redux-form" target="_blank">redux-form</a> to manage form state
              in Redux
            </li>
            <li><a href="https://github.com/erikras/multireducer" target="_blank">multireducer</a> combine several
              identical reducer states into one key-based reducer</li>
            <li><a href="https://github.com/webpack/style-loader" target="_blank">style-loader</a> and <a
              href="https://github.com/jtangelder/sass-loader" target="_blank">sass-loader</a> to allow import of
              stylesheets
            </li>
            <li><a href="https://github.com/shakacode/bootstrap-sass-loader" target="_blank">bootstrap-sass-loader</a> and <a
              href="https://github.com/gowravshekar/font-awesome-webpack" target="_blank">font-awesome-webpack</a> to customize Bootstrap and FontAwesome
            </li>
            <li><a href="http://socket.io/">socket.io</a> for real-time communication</li>
          </ul>

          <h3>Features demonstrated in this project</h3>

          <dl>
            <dt>Multiple components subscribing to same redux store slice</dt>
            <dd>
              The <code>App.js</code> that wraps all the pages contains an <code>InfoBar</code> component
              that fetches data from the server initially, but allows for the user to refresh the data from
              the client. <code>About.js</code> contains a <code>MiniInfoBar</code> that displays the same
              data.
            </dd>
            <dt>Server-side data loading</dt>
            <dd>
              The <Link to="/widgets">Widgets page</Link> demonstrates how to fetch data asynchronously from
              some source that is needed to complete the server-side rendering. <code>Widgets.js</code>&quot;s
              <code>asyncConnect()</code> function is called before the widgets page is loaded, on either the server
              or the client, allowing all the widget data to be loaded and ready for the page to render.
            </dd>
            <dt>Data loading errors</dt>
            <dd>
              The <Link to="/widgets">Widgets page</Link> also demonstrates how to deal with data loading
              errors in Redux. The API endpoint that delivers the widget data intentionally fails 33% of
              the time to highlight this. The <code>clientMiddleware</code> sends an error action which
              the <code>widgets</code> reducer picks up and saves to the Redux state for presenting to the user.
            </dd>
            <dt>Session based login</dt>
            <dd>
              On the <Link to="/login">Login page</Link> you can submit a username which will be sent to the server
              and stored in the session. Subsequent refreshes will show that you are still logged in.
            </dd>
            <dt>Redirect after state change</dt>
            <dd>
              After you log in, you will be redirected to a Login Success page. This <strike>magic</strike> logic
              is performed in <code>componentWillReceiveProps()</code> in <code>App.js</code>, but it could
              be done in any component that listens to the appropriate store slice, via Redux&quot;s <code>@connect</code>,
              and pulls the router from the context.
            </dd>
            <dt>Auth-required views</dt>
            <dd>
              The aforementioned Login Success page is only visible to you if you are logged in. If you try
              to <Link to="/loginSuccess">go there</Link> when you are not logged in, you will be forwarded back
              to this home page. This <strike>magic</strike> logic is performed by the
              <code>onEnter</code> hook within <code>routes.js</code>.
            </dd>
            <dt>Forms</dt>
            <dd>
              The <Link to="/survey">Survey page</Link> uses the
              still-experimental <a href="https://github.com/erikras/redux-form" target="_blank">redux-form</a> to
              manage form state inside the Redux store. This includes immediate client-side validation.
            </dd>
            <dt>WebSockets / socket.io</dt>
            <dd>
              The <Link to="/chat">Chat</Link> uses the socket.io technology for real-time
              communication between clients. You need to <Link to="/login">login</Link> first.
            </dd>
          </dl>

          <h3>From the author</h3>

          <p>
            I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015,
            all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as
            quickly as they have come into it, but I personally believe that this stack is the future of web development
            and will survive for several years. I&quot;m building my new projects like this, and I recommend that you do,
            too.
          </p>

          <p>Thanks for taking the time to check this out.</p>

          <p>– Erik Rasmussen</p>
        </div>

        <div style={{padding: 20, background: '#f6f6f6'}}>
          <Card>
            <div style={{background: 'hsl(0,50%,50%)'}}>header</div>
            <CardHeader
              title="Title"
              subtitle="Subtitle"
              avatar={<Avatar>A</Avatar>}/>
            <CardHeader
              title="Demo Url Based Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"/>
            <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
              <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
            <CardTitle title="Title" subtitle="Subtitle"/>
            <CardActions style={{textAlign: 'right'}}>
              <FlatButton label="Action1" primary />
              <FlatButton label="Action2" primary />
            </CardActions>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>

        <RaisedButton label="Default" primary />


        <List>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
        <ListDivider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>


        <IconButton tooltip="Star" touch>
          <ActionGrade/>
        </IconButton>

        <RefreshIndicator size={40} left={80} top={5} status="loading" />
        <RefreshIndicator size={40} left={80} top={5} loadingColor={"#FF9800"} status="loading" />
      </div>
    );
  }
}
