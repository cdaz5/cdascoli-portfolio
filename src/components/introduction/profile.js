import React from 'react';

import Headshot from 'assets/pngs/headshot.jpg';
import { Spacer } from 'styles';

import {
  Avatar,
  Header,
  Link,
  LinkContainer,
  ProfileContainer,
  SubHeader,
} from './styles';
import { LINKS } from './constants';

const Profile = () => (
  <ProfileContainer>
    <Avatar src={Headshot} alt="headshot" />
    <Spacer topMargin="6px" />

    <Header>Chris Dascoli</Header>
    <Spacer topMargin="6px" />

    <SubHeader>Full Stack Developer</SubHeader>
    <Spacer topMargin="6px" />

    <SubHeader as="h3">Web/Mobile</SubHeader>
    <Spacer topMargin="6px" />

    <LinkContainer>
      {LINKS.map(({ href, icon }) => (
        <Link key={href} target="_blank" rel="noopener noreferrer" href={href}>
          {icon}
        </Link>
      ))}
    </LinkContainer>
  </ProfileContainer>
);

export default Profile;
