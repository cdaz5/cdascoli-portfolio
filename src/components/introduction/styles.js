import styled, { css } from 'styled-components';

import { Flex, SlashContainer, MEDIA_QUERIES } from 'styles';

const getColor = ({ theme: { colors }, variant = 'black' }) => colors[variant];

// need some funky workaround to get the typeit library to play nice
const baseStyles = ({ numOfSpaces }) => css`
  font-family: Inconsolata;
  display: inline-block;
  margin: 0;
  font-size: 2rem;
  /* content doesnt accept dynamic vars (might be styled components bug) so have to hard code these amounts */
  &:after {
    ${({ noSpace }) =>
      noSpace &&
      css`
        content: '';
      `}
    ${({ dblSpace }) =>
      dblSpace &&
      css`
        content: '\\a0\\a0\\a0';
      `}
    ${({ trplSpace }) =>
      trplSpace &&
      css`
        content: '\\a0\\a0\\a0\\a0\\a0';
      `}
    ${({ noSpace, dblSpace, trplSpace }) =>
      !noSpace &&
      !dblSpace &&
      !trplSpace &&
      css`
        content: '\\a0';
      `}
  }

  ${MEDIA_QUERIES.maxIPhone} {
    font-size: 1rem;
  }
`;

export const Emphasize = styled.p`
  ${baseStyles};
  font-weight: bold;
  font-style: italic;
  color: ${getColor};
`;

export const Copy = styled.p`
  ${baseStyles};
  color: ${getColor};
  margin-left: ${({ marginLeft }) => marginLeft && '-20px'};

  ${MEDIA_QUERIES.maxIPhone} {
    margin-left: ${({ marginLeft }) => marginLeft && '0'};
  }
`;

export const TextContainer = styled(Flex)`
  display: inline-block;
  margin: 4px 0;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  filter: drop-shadow(8px 8px 10px gray) sepia(20%) brightness(130%);
  width: 220px;
  height: 220px;
`;

export const Header = styled.h1`
  font-size: 2rem;
`;

export const Link = styled.a`
  margin-right: 20px;
`;

export const ProfileContainer = styled.span`
  width: 30vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-1000px);
  transition: all 1.2s ease-in-out;

  &.profile-enter-active {
    transform: translateX(0);
  }
  &.profile-enter-done {
    transform: translateX(0);
  }

  ${MEDIA_QUERIES.maxIPad} {
    width: 100vw;
    margin-bottom: 30px;
  }
`;

export const AutoTypeContainer = styled.span`
  flex-basis: 672px;

  .Typist {
    justify-content: ${({ isTyping }) => (isTyping ? 'center' : 'flex-start')};
  }
`;

export const Container = styled(SlashContainer)`
  padding: 30px;
  min-height: 440px;
  justify-content: ${({ isTyping }) => (isTyping ? 'center' : 'flex-start')};

  ${MEDIA_QUERIES.maxIPad} {
    justify-content: center;
  }
`;
