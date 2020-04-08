import React, { useState } from 'react';

import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';

import { Label, Slider, Input } from './styles';

const Switch = (props) => {
  const [checked, setChecked] = useState(true);

  const toggle = () => setChecked((prev) => !prev);

  return (
    <Label>
      <MoonIcon />
      <SunIcon />
      <Input type="checkbox" checked={checked} onClick={toggle} {...props} />
      <Slider />
    </Label>
  );
};

export default Switch;
