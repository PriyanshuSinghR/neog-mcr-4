import { createContext, useReducer } from 'react';
import { forumData } from '../data';

export const MyContext = createContext();

const reduceMy = (state, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        allPosts: action.payload,
      };
    case 'UPVOTE_POSTS':
      return {
        ...state,
        allPosts: [...state.allPosts].map((post) =>
          post.postId === action.payload.postId
            ? { ...post, upvotes: post.upvotes + 1 }
            : post,
        ),
      };
    case 'DOWNVOTE_POSTS':
      return {
        ...state,
        allPosts: [...state.allPosts].map((post) =>
          post.postId === action.payload.postId
            ? { ...post, downvotes: post.downvotes + 1 }
            : post,
        ),
      };
    case 'UPDATE_BOOKMARK':
      return {
        ...state,
        allPosts: [...state.allPosts].map((post) =>
          post.postId === action.payload.postId
            ? { ...post, isBookmarked: !post.isBookmarked }
            : post,
        ),
      };
    case 'SORT':
      return {
        ...state,
        sortTag: action.payload,
      };

    default:
      break;
  }
};

export function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reduceMy, {
    allPosts: forumData.posts,
    sortTag: '',
  });

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
