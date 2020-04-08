import React from 'react';

import { SlashContainer, Flex } from 'styles';
import useFetch from 'hooks/use-fetch';
import Button from 'components/button';
import TextButton from 'components/text-button';

import BlogCard from './blog-card';

const BlogPosts = () => {
  const { data, showMore, showLess: showLessFn, cursor, loading } = useFetch(
    'https://nzehfzik1b.execute-api.us-east-2.amazonaws.com/beta/medium-posts',
  );

  const showLess = cursor > 2;
  const isMoreDisabled = cursor >= data.length;

  return (
    <SlashContainer variant="secondary">
      <h1>Blog Posts</h1>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
        {data.map((post, idx) => {
          const visible = idx <= cursor;
          return visible && <BlogCard key={post.id} {...post} />;
        })}
      </Flex>
      {showLess && <TextButton onClick={showLessFn}>Show Less</TextButton>}
      {data.length > 0 && (
        <Button disabled={isMoreDisabled} onClick={showMore} loading={loading}>
          Show More
        </Button>
      )}
    </SlashContainer>
  );
};

export default BlogPosts;
