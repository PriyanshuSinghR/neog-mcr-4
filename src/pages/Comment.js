import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { Hero } from '../components/Hero';
import { Icon } from '@iconify/react';
import { PostCard } from '../components/PostCard';

export const Comment = () => {
  const { productId } = useParams();
  const { state, dispatch } = useContext(MyContext);
  const [post, setPost] = useState({});
  const [count, setCount] = useState(0);

  const upPost = () => {
    setCount(count + 1);
  };
  const downPost = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setPost(state.allPosts.find((p) => p.id == productId));
    setCount(post.upvotes - post.downvotes);
  }, []);

  return (
    <Hero>
      <div style={{ display: 'flex' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Icon
            icon="ic:twotone-arrow-back"
            color="black"
            width="30"
            height="30"
          />
        </Link>
        <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px' }}>
          Post
        </p>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            margin: '40px auto',
            width: '60%',
            paddingBottom: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <div style={{ marginRight: '40px' }}>
            <Icon
              icon="teenyicons:up-solid"
              color={count > 0 ? 'blue' : 'gray'}
              width="30"
              height="30"
              style={{ cursor: 'pointer' }}
              onClick={upPost}
            />
            <div style={{ fontSize: '12px' }}>{count}</div>
            <Icon
              icon="teenyicons:down-solid"
              color={count < 0 ? 'red' : 'gray'}
              width="30"
              height="30"
              style={{ cursor: 'pointer' }}
              onClick={downPost}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex' }}>
                <img
                  src={post?.picUrl}
                  style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50% 50%',
                  }}
                />
                <p
                  style={{
                    fontSize: '12px',
                    color: 'gray',
                    marginTop: '10px',
                    marginLeft: '10px',
                  }}
                >
                  Posted by @{post?.username}
                </p>
              </div>
              <p
                style={{
                  fontSize: '24px',
                  margin: 0,
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}
              >
                {post?.post}
              </p>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                {post?.tags?.map((tag) => (
                  <div
                    style={{
                      backgroundColor: 'gray',
                      color: 'purple',
                      borderRadius: '10px',
                      fontSize: '10px',
                      padding: '5px',
                      marginRight: '10px',
                    }}
                  >
                    {tag.toUpperCase()}
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  textAlign: 'left',
                  marginTop: '10px',
                  height: '100%',
                  border: 'none',
                  marginBottom: '20px',
                }}
              >
                {post?.postDescription}
              </div>
            </div>

            <div style={{ borderTop: '1px solid gray' }}></div>
            <div
              style={{
                display: 'flex',
                padding: '10px',
                width: '90%',
                justifyContent: 'space-between',
              }}
            >
              <Link to={`/comment/${post?.postId}`} style={{ display: 'flex' }}>
                <Icon
                  icon="mdi:comment"
                  color="gray"
                  width="25"
                  height="25"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
              <div>
                <Icon
                  icon="mdi:share"
                  color="gray"
                  width="25"
                  height="25"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div>
                <Icon
                  icon="mdi:bookmark"
                  color={post?.isBookmarked ? 'blue' : 'gray'}
                  width="25"
                  height="25"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    dispatch({ type: 'UPDATE_BOOKMARK', payload: post });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};
