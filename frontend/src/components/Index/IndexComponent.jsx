import React from 'react';

export class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.resize = this.resize.bind(this);
    this.navigateUserClick = this.navigateUserClick.bind(this);
  }

  shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  handleImage = (picture) =>{
    if(picture == null){
      return "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/33db51b709c04b279a1826b3bbf0faf2.png"
    }
    return picture
  }
  componentDidMount() {
    const request = {
      all: true
    };

    this.props.getUsers(request).then(action => {
      console.log(action)
      let users = Object.values(action.users);
      this.shuffle(users);
      this.setState({
        users
      });
    });

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  navigateUserClick(username) {
    return () => {
      this.props.history.push(`/users/${username}`);
    };
  }

  resize() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
  }

  render() {
    const listStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '20px'
    };

    const recommendedStyle = {
      color: '#dad8de',
      fontSize: '16px',
      marginBottom: '15px',
      marginLeft: '5px'
    };

    const elementStyle = {
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      height: '205px',
      margin: '0px 5px',
      boxSizing: 'border-box',
      backgroundColor: '#19171c',
      cursor: 'pointer'
    };

    const bottomStyle = {
      height: '60px',
      width: '100%',
      marginTop: '25px',
      boxSizing: 'border-box',
      backgroundColor: '#0f0e11',
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'flex-start',
      cursor: 'default'
    };

    const infoStyle = {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '13px',
      overflow: 'hidden',
      marginLeft: '10px',
      width: '100%',
      position: 'relative'
    };

    const streamTitle = {
      minWidth: '0px',
      fontWeight: 'bold',
      marginBottom: '7px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      position: 'absolute',
      width: '85%'
    };
    const streamUsername = {
      minWidth: '0px',
      color: '#b8b5c0',
      fontSize: '11px',
      marginBottom: '4px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      position: 'absolute',
      top: '20px',
      width: '85%'
    };
    const streamCategory = {
      minWidth: '0px',
      color: '#b8b5c0',
      fontSize: '11px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      position: 'absolute',
      top: '35px',
      width: '85%'
    };

    const regularIcon = {
      borderRadius: '1000px',
      width: '90px',
      height: '90px',
      margin: '15px auto'
    };
    const miniIcon = {
      borderRadius: '1000px',
      width: '40px',
      height: '40px'
    };

    const userDivs1 = [];
    const userDivs2 = [];
    const userDivs3 = [];
    let divCounter = 1;
    if (window.innerWidth > 1900) {
      divCounter = 7;
    } else if (window.innerWidth > 1600) {
      divCounter = 6;
    } else if (window.innerWidth > 1300) {
      divCounter = 5;
    } else if (window.innerWidth > 1000) {
      divCounter = 4;
    } else if (window.innerWidth > 600) {
      divCounter = 3;
    } else if (window.innerWidth > 300) {
      divCounter = 2;
    }

    let path = this.props.location.pathname.substring(1);
    const allTags = [
      'Comp',
      'Happy',
      'Fun',
      'Messing Around',
      'Family Friendly',
      'Joy Joy',
      'Flavor'
    ];

    let displayUsers;
    let IndexTitle = '';
    if (path === '') {
      IndexTitle = 'Just Some Random Channels';
      displayUsers = Array.from(this.state.users);
    } else if (!allTags.includes(path)) {
      IndexTitle = `All channels under Category: ${path}`;
      const users = this.state.users.filter(user => {
        return this.props.location.pathname.includes(user.stream_category);
      });
      displayUsers = Array.from(users);
    } else {
      IndexTitle = `All channels with Tag: ${path}`;
      const users = this.state.users.filter(user => {
        return user.tags.includes(path);
      });
      displayUsers = Array.from(users);
    }

    if (displayUsers.length >= 1) {
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs1.push(
          <div
            key={user.username}
            style={elementStyle}
            onClick={this.navigateUserClick(user.username)}
          >
            <div className="backgroundImageForIndex">
              <div style={regularIcon}>
                <img style={regularIcon} src={this.handleImage(user.picture)}></img>
              </div>
            </div>
            <div style={bottomStyle}>
              <div style={miniIcon}>
                <img style={miniIcon} src={this.handleImage(user.picture)}></img>
              </div>
              <div style={infoStyle}>
                <div style={streamTitle}>{user.stream_title}</div>
                <div style={streamUsername}>{user.username}</div>
                <div style={streamCategory}>{user.stream_category}</div>
              </div>
            </div>
          </div>
        );
      }
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs2.push(
          <div
            key={user.username}
            style={elementStyle}
            onClick={this.navigateUserClick(user.username)}
          >
            <div className="backgroundImageForIndex">
              <div style={regularIcon}>
                <img style={regularIcon} src={this.handleImage(user.picture)}></img>
              </div>
            </div>
            <div style={bottomStyle}>
              <div style={miniIcon}>
                <img style={miniIcon} src={this.handleImage(user.picture)}></img>
              </div>
              <div style={infoStyle}>
                <div style={streamTitle}>{user.stream_title}</div>
                <div style={streamUsername}>{user.username}</div>
                <div style={streamCategory}>{user.stream_category}</div>
              </div>
            </div>
          </div>
        );
      }
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs3.push(
          <div
            key={user.username}
            style={elementStyle}
            onClick={this.navigateUserClick(user.username)}
          >
            <div className="backgroundImageForIndex">
              <div style={regularIcon}>
                <img style={regularIcon} src={this.handleImage(user.picture)}></img>
              </div>
            </div>
            <div style={bottomStyle}>
              <div style={miniIcon}>
                <img style={miniIcon} src={this.handleImage(user.picture)}></img>
              </div>
              <div style={infoStyle}>
                <div style={streamTitle}>{user.stream_title}</div>
                <div style={streamUsername}>{user.username}</div>
                <div style={streamCategory}>{user.stream_category}</div>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <div>
          <div style={recommendedStyle}>{IndexTitle}</div>
          <div style={listStyle}>{userDivs1}</div>
          <div style={listStyle}>{userDivs2}</div>
          <div style={listStyle}>{userDivs3}</div>
        </div>
      </div>
    );
  }
}
