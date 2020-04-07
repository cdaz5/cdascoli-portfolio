import React from 'react';

import { ReactComponent as ExternalIcon } from 'assets/icons/external-link.svg';

import { Link } from './styles';

const ExternalLink = ({ name, href }) => (
  <Link
    alt={`link to ${name}`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <ExternalIcon height="18px" width="18px" />
  </Link>
);

export default ExternalLink;
