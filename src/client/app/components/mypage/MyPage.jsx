import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {AppBar, Drawer, RightNav, Header, Contents} from '../';
import {HeaderMyPage, DrawerMyPage, NotificationMyPage, Score, ProjectFilter, Project} from './';

export default class MyPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {projects, user, notifications, score} = this.props;

    return (
      <div className="p-mypage">
        <AppBar />
        <Drawer>
          <DrawerMyPage />
        </Drawer>
        <Header>
          <HeaderMyPage user={user} />
        </Header>
        <Contents>
          <div className="p-mypageContent">
            <Score {...score} />
            <ProjectFilter projects={projects} />
            {projects.map(p => (
              <Project {...p} />
            ))}
          </div>
        </Contents>
        <RightNav>
          <NotificationMyPage notifications={notifications} />
        </RightNav>
      </div>
    );
  }
}

MyPage.propTypes = {
  projects: PropTypes.array,
  user: PropTypes.object,
  notifications: PropTypes.array,
  score: PropTypes.object,
};
