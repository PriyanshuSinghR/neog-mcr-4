import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { PostShow } from '../components/PostShow';

export const Home = () => {
  return (
    <Hero>
      <h3 style={{ textAlign: 'left', marginLeft: '100px' }}>Home</h3>
      <PostShow />
    </Hero>
  );
};
