import styled from 'styled-components';

import { colorLookup } from 'styles';

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 1;

  #moon,
  #sun {
    position: absolute;
    z-index: 2;
  }

  #moon {
    top: 8px;
    left: 6px;
    height: 20px;
    width: 20px;
  }

  #sun {
    top: 7px;
    right: 6px;
    height: 20px;
    width: 20px;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 34px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colorLookup('accent')};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    border-radius: 50%;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 4;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${colorLookup('accent')};

    &:before {
      transform: translateX(26px);
    }
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${colorLookup('accent')};
  }
`;
