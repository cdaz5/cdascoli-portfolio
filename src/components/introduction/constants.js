import React from 'react';

import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as MediumIcon } from 'assets/icons/medium.svg';

export const LINKS = [
  {
    href: 'https://github.com/cdaz5',
    icon: <GithubIcon height="40px" width="40px" />,
  },
  {
    href: 'mailto:chris.dascoli@gmail.com',
    icon: <EmailIcon height="40px" width="40px" />,
  },
  {
    href: 'https://medium.com/@chris.dascoli',
    icon: <MediumIcon height="40px" width="40px" />,
  },
  {
    href: 'https://www.linkedin.com/in/cdaz5/',
    icon: <LinkedInIcon height="40px" width="40px" />,
  },
];
