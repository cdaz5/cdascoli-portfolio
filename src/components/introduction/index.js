import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container } from './styles';

import AutoType from './auto-type';
import Profile from './profile';

const Introduction = () => {
  const [isTyping, setIsTyping] = useState(true);

  return (
    <Container isTyping={isTyping}>
      <CSSTransition
        in={!isTyping}
        timeout={200}
        classNames="profile"
        unmountOnExit
      >
        <Profile />
      </CSSTransition>
      <AutoType setIsTyping={setIsTyping} isTyping={isTyping} />
    </Container>
  );
};

export default Introduction;
