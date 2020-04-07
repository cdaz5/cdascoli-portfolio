import React from 'react';

import { Flex } from 'styles';
import { formatDistanceDates } from 'utils/dates';
import { ReactComponent as ClapIcon } from 'assets/icons/clap.svg';

import { Card, Header, Copy, Date, Claps } from './styles';

const BlogCard = ({
  id,
  uniqueSlug,
  title,
  content,
  firstPublishedAt,
  virtuals,
}) => (
  <Card>
    <Header>{title}</Header>
    <Copy>{content.subtitle}</Copy>
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <ClapIcon height="20" width="20" />
        &nbsp;
        <Claps>{virtuals.totalClapCount}</Claps>
      </Flex>
      <Date>
        {formatDistanceDates({
          from: firstPublishedAt,
          withSuffix: false,
        })}
      </Date>
    </Flex>
  </Card>
);

export default BlogCard;
