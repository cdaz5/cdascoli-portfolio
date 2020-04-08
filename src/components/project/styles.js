import styled, { css } from 'styled-components';

import { MEDIA_QUERIES } from 'styles';

const getTextColor = ({ theme, variant }) =>
  variant === 'white' ? theme.colors['medGray'] : theme.colors['black'];

const baseStyles = css`
  color: ${getTextColor};
`;

export const Header = styled.h1`
  ${baseStyles};
  font-size: 2em;
`;

export const SubHeader = styled.h1`
  display: flex;
  align-items: center;
  ${baseStyles};

  ${MEDIA_QUERIES.maxIPhone} {
    line-height: 1.3;
  }
`;

export const Copy = styled.p`
  ${baseStyles};
  font-size: 1.2rem;
  margin-bottom: 16px;
  line-height: 1.1;

  ${MEDIA_QUERIES.maxIPhone} {
    line-height: 1.3;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 20px 20px 0;
  min-width: 260px;

  ${MEDIA_QUERIES.maxXLIPhone} {
    margin: 0 0 20px 0;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;

  ${MEDIA_QUERIES.maxIPadMini} {
    width: 92%;
  }

  ${MEDIA_QUERIES.maxXLIPhone} {
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  min-width: 240px;
  flex-basis: 45%;

  img {
    max-width: 100%;
  }
`;
