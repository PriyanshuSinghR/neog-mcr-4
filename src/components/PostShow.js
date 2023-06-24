import React, { useContext, useEffect, useState } from 'react';
import { PostCard } from './PostCard';
import { MyContext } from '../context/MyContext';

export const PostShow = () => {
  const { state, dispatch } = useContext(MyContext);
  const [selectedTag, setSelectedTag] = useState(' select');
  //   console.log(selectedTag);

  const filteredData =
    state.sortTag === 'select'
      ? state.allPosts
      : state.sortTag === 'latest'
      ? state?.allPosts?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )
      : state?.allPosts?.sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div>
      {filteredData.map((post) => (
        <div>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
