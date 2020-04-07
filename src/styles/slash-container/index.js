import styled from 'styled-components';

import { colorLookup } from '../theme';

const SlashContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 150px 0;
  background-color: ${colorLookup()};
  justify-content: center;
  align-items: center;
`;

export default SlashContainer;
