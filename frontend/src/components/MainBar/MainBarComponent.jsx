import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexContainer from '../Index/IndexContainer';
import FollowersContainer from '../Followings/FollowersContainer';
import FolloweesContainer from '../Followings/FolloweesContainer';
import CategoryContainer from '../Category/CategoryContainer';
import VideoContainer from "../Video/VideoContainer";
import ChannelContainer from '../Channel/ChannelContainer';

export class MainBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainStyle = {
      // float: 'left',
      width: 'calc(100% - 5px)',
      position: 'relative',
      backgroundColor: '#0f0e11',
      boxSizing: 'border-box',
      borderLeft: 'solid 1px #252328',
      overflowY: 'scroll',
      margin: '49px'
      // overflow: 'hidden'
    };
    const mainContainer = {
      paddingLeft: '20px',
      paddingTop: '20px',
      paddingRight: '49px',
      overflowX: 'hidden'
    };

    if (this.props.location.pathname.includes(`/users/`)) {
      mainStyle['padding'] = '49px 0px';
    }

    return (
      <div style={mainStyle} id="mainBarComp">
        <Route path="/users/:username" component={ChannelContainer}></Route>
        <div style={mainContainer} id="mainContainer">
          <Switch>
            <Route
              exact
              path="/users/:username"
              component={VideoContainer}
            ></Route>
            <Route
              exact
              path="/users/:username/following"
              component={FolloweesContainer}
            ></Route>
            <Route
              exact
              path="/users/:username/followers"
              component={FollowersContainer}
            ></Route>
            <Route
              exact
              path="/directory/"
              component={CategoryContainer}
            ></Route>
            <Route path="/" component={IndexContainer}></Route>
          </Switch>
          <br></br>
        </div>
      </div>
    );
  }
}
