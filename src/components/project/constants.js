import React from 'react';

import ReactLogo from 'assets/pngs/react.png';
import ReduxLogo from 'assets/pngs/redux.png';
import GraphQLLogo from 'assets/pngs/graphql.png';
import StyledLogo from 'assets/pngs/styled-components.png';
import AwsLogo from 'assets/pngs/aws.png';
import NpmLogo from 'assets/pngs/npm.png';
import OpenSourceLogo from 'assets/pngs/open-source.png';

import { ReactComponent as AppStoreLogo } from 'assets/icons/app.svg';
import { ReactComponent as NodeLogo } from 'assets/icons/nodejs.svg';
import AngryWeatherLogo from 'assets/pngs/angry-weather.png';

import SlackerLogo from 'assets/pngs/slacker.png';

export const PROJECTS = [
  {
    variant: 'main',
    appName: 'Angry Weather',
    appDescription:
      "A simple ios 'angry' weather app that says how people really feel about bad weather.  It is currently in Beta testing in the App Store.",
    appMockup: AngryWeatherLogo,
    appUrl: null,
    techDescription:
      'Angry Weather integrates with the Open Weather Map API while utilizing React Native, Redux, and vanilla CSS.',
    techUrl: 'https://github.com/cdaz5/react-native-weather-app',
    techLogos: [
      { type: 'image', alt: 'react native logo', Component: ReactLogo },
      { type: 'image', alt: 'redux logo', Component: ReduxLogo },
      { type: 'icon', Component: <AppStoreLogo height="50px" width="50px" /> },
    ],
  },
  {
    variant: 'white',
    appName: 'Slacker',
    appDescription:
      "A Slack clone web application emulating the best way to communicate since AOL AIM circa '96.",
    appMockup: SlackerLogo,
    appUrl: 'http://slacker.surge.sh/register',
    techDescription:
      'Slacker is built with React, Node.js, GraphQL, Apollo, Semantic UI, Styled Components, and PostgreSQL.  Backend is deployed via AWS EC2 and Docker, front-end via Surge.sh.',
    techUrl: 'https://github.com/cdaz5/slacker-client',
    techLogos: [
      { type: 'image', alt: 'react logo', Component: ReactLogo },
      { type: 'image', alt: 'graphql logo', Component: GraphQLLogo },
      { type: 'image', alt: 'styled components logo', Component: StyledLogo },
      { type: 'image', alt: 'aws logo', Component: AwsLogo },
      { type: 'icon', Component: <NodeLogo height="50px" width="50px" /> },
    ],
  },
  {
    variant: 'main',
    appName: 'React Loaders Spinners',
    appDescription:
      'My contribution to the open source community is a React component-based library of CSS loaders and spinners that anyone can enjoy.',
    appMockup: OpenSourceLogo,
    appUrl: 'https://codesandbox.io/s/2prqo9p5wn',
    techDescription:
      'React-Loaders-Spinners is an NPM Module for React built with Styled-Components and React in a Node.js environment.',
    techUrl: 'https://github.com/cdaz5/react-loaders-spinners',
    techLogos: [
      { type: 'image', alt: 'react logo', Component: ReactLogo },
      { type: 'image', alt: 'styled components logo', Component: StyledLogo },
      { type: 'image', alt: 'npm logo', Component: NpmLogo },
      { type: 'icon', Component: <NodeLogo height="50px" width="50px" /> },
    ],
  },
];
