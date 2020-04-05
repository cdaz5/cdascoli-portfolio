import styled from 'styled-components';

import { colorLookup } from '../theme';

const SlashContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100vw;
  padding-bottom: 100px;
  background-color: ${colorLookup()};
  justify-content: center;
  align-items: center;
`;

export default SlashContainer;
