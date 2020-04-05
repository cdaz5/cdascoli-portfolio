import React from 'react';

import Headshot from 'assets/pngs/headshot.jpg';
import { Flex, Spacer } from 'styles';

import { Avatar, Header, Link, ProfileContainer } from './styles';
import { LINKS } from './constants';

const Profile = () => (
  <ProfileContainer>
    <Avatar src={Headshot} alt="headshot" />
    <Spacer topMargin="6px" />

    <Header>Chris Dascoli</Header>
    <Spacer topMargin="6px" />

    <h2>Full Stack Developer</h2>
    <Spacer topMargin="6px" />

    <h3>Web/Mobile</h3>
    <Spacer topMargin="6px" />

    <Flex justifyContent="center">
      {LINKS.map(({ href, icon }) => (
        <Link target="_blank" rel="noopener noreferrer" href={href}>
          {icon}
        </Link>
      ))}
    </Flex>
  </ProfileContainer>
);

export default Profile;
