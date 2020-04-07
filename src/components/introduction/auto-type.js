import React from 'react';
import Typist from 'react-typist';

import { Emphasize, TextContainer, Copy, AutoTypeContainer } from './styles';

const AutoType = ({ setIsTyping, isTyping }) => (
  <AutoTypeContainer isTyping={isTyping}>
    <Typist stdTypingDelay={60} onTypingDone={() => setIsTyping(false)}>
      <TextContainer>
        <Copy variant="codeTeal">1</Copy>
        <Emphasize>const</Emphasize>
        <Copy noSpace variant="codeBlue">
          introduceMyeslf
        </Copy>

        <Typist.Backspace count={4} delay={200} />
        <Copy variant="codeBlue">self</Copy>
        <Copy>{'= {'}</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" dblSpace>
          2
        </Copy>
        <Copy>fullName:</Copy>
        <Copy noSpace variant="codeGreen">
          'Chris Dascoli'
        </Copy>
        <Copy>,</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" dblSpace>
          3
        </Copy>
        <Copy noSpace>specialteis</Copy>

        <Typist.Backspace count={3} delay={200} />
        <Copy>ies: [</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" trplSpace>
          4
        </Copy>
        <Copy variant="codeBlue" noSpace>
          ...languages
        </Copy>
        <Copy>,</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" trplSpace>
          5
        </Copy>
        <Copy variant="codeBlue" noSpace>
          ...frameworks
        </Copy>
        <Copy>,</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" trplSpace>
          6
        </Copy>
        <Copy noSpace variant="codeBlue">
          ...databseas
        </Copy>
        <Typist.Backspace count={4} delay={200} />
        <Copy variant="codeBlue" noSpace>
          ases
        </Copy>
        <Copy>,</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" dblSpace>
          7
        </Copy>
        <Copy>{'],'}</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" dblSpace>
          8
        </Copy>
        <Copy>{'rules: {'}</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal" trplSpace>
          9
        </Copy>
        <Copy variant="codeGreen" marginLeft>
          'code is glorious'
        </Copy>
        <Typist.Backspace count={9} delay={60} />
        <Typist.Delay ms={100} />

        <Copy noSpace variant="codeGreen" marginLeft>
          incredibly frustra
        </Copy>
        <Typist.Backspace count={18} delay={60} />
        <Typist.Delay ms={100} />

        <Copy variant="codeGreen">a universal language':</Copy>
        <Copy noSpace>1,</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy dblSpace variant="codeTeal">
          10
        </Copy>
        <Copy>{'},'}</Copy>
      </TextContainer>
      <br />
      <TextContainer>
        <Copy variant="codeTeal">11</Copy>
        <Copy>{'};'}</Copy>
      </TextContainer>
      <br />
    </Typist>
  </AutoTypeContainer>
);

export default AutoType;
