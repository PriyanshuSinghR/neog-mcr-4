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
    case 'UPDATE_BOOKMARK':
      return {
        ...state,
        allPosts: [...state.allPosts].map((post) =>
          post.postId === action.payload.postId
            ? { ...post, isBookmarked: !post.isBookmarked }
            : post,
        ),
      };
    case 'HELPER':
      return {
        ...state,
        helper: !state.helper,
      };

    default:
      break;
  }
};

export function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reduceMy, {
    allPosts: forumData.posts,
    helper: false,
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
