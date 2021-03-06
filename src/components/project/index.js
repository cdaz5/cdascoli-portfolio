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
        <Header variant={variant}>
          {appName}
          {appUrl && (
            <ExternalLink name={`${appName} code on github`} href={techUrl} />
          )}
        </Header>
        <Copy variant={variant}>{appDescription}</Copy>
        <SubHeader variant={variant}>
          Tech Stack
          <ExternalLink name={`${appName} code on github`} href={techUrl} />
        </SubHeader>
        <Copy variant={variant}>{techDescription}</Copy>
        <Flex justifyContent="space-evenly" width="100%">
          {techLogos.map(({ type, alt, Component }) =>
            type === 'image' ? (
              <Image key={`${appName}-${alt}`} src={Component} alt={alt} />
            ) : (
              <Component key={`${appName}-${alt}`} height="50px" width="50px" />
            ),
          )}
        </Flex>
      </ProjectContent>
      <ImageContainer invert={appMockup.invert}>
        <img src={appMockup.logo} alt={`${appName} mockup`} />
      </ImageContainer>
    </ProjectContainer>
  </SlashContainer>
);

const ProjectList = () => (
  <>
    {PROJECTS.map((project) => (
      <Project key={project.appName} {...project} />
    ))}
  </>
);

export default ProjectList;
