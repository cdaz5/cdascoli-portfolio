import React from 'react';

import { Flex, SlashContainer } from 'styles';
import ExternalLink from 'components/external-link';

import {
  Header,
  SubHeader,
  Copy,
  ProjectContent,
  ProjectContainer,
  ImageContainer,
  Image,
} from './styles';
import { PROJECTS } from './constants';

const Project = ({
  appName,
  appDescription,
  appMockup,
  appUrl,
  techDescription,
  techLogos,
  techUrl,
  variant,
}) => (
  <SlashContainer variant={variant}>
    <ProjectContainer>
      <ProjectContent>
        <Header>
          {appName}
          {appUrl && (
            <ExternalLink name={`${appName} code on github`} href={techUrl} />
          )}
        </Header>
        <Copy>{appDescription}</Copy>
        <SubHeader>
          Tech Stack
          <ExternalLink name={`${appName} code on github`} href={techUrl} />
        </SubHeader>
        <Copy>{techDescription}</Copy>
        <Flex justifyContent="space-evenly" width="100%">
          {techLogos.map(({ type, alt, Component }) =>
            type === 'image' ? <Image src={Component} alt={alt} /> : Component,
          )}
        </Flex>
      </ProjectContent>
      <ImageContainer>
        <img src={appMockup} alt={`${appName} mockup`} />
      </ImageContainer>
    </ProjectContainer>
  </SlashContainer>
);

const ProjectList = () => (
  <>
    {PROJECTS.map((project) => (
      <Project {...project} />
    ))}
  </>
);

export default ProjectList;
