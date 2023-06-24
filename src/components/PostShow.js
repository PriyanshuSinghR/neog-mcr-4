import React, { useContext, useEffect, useState } from 'react';
import { PostCard } from './PostCard';
import { MyContext } from '../context/MyContext';

export const PostShow = () => {
  const { state } = useContext(MyContext);

  return (
    <div>
      {state.allPosts.map((post) => (
        <div>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
