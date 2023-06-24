import { Icon } from '@iconify/react';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

export const Hero = ({ children }) => {
  const [users, setUsers] = useState([]);
  const { state, dispatch } = useContext(MyContext);

  const getActiveStyle = ({ isActive }) => ({
    textDecoration: 'none',
    display: 'flex',
    fontWeight: isActive ? '600' : '200',
    color: isActive ? 'red' : 'black',
    fontSize: '18px',
    paddingLeft: '100px',
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        height: '80vh',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',

            justifyContent: 'space-between',
            height: '200px',
          }}
        >
          <NavLink to="/" className="navlink-border" style={getActiveStyle}>
            <Icon
              icon="ic:baseline-home"
              color="black"
              width="30"
              height="30"
            />
            <div style={{ padding: '5px' }}>Home</div>
          </NavLink>
          <NavLink
            to="/explore"
            className="navlink-border"
            style={getActiveStyle}
          >
            <Icon
              icon="ic:round-explore"
              color="black"
              width="30"
              height="30"
            />
            <div style={{ padding: '5px' }}>Explore</div>
          </NavLink>
          <NavLink
            to="/bookmark"
            className="navlink-border"
            style={getActiveStyle}
          >
            <Icon
              icon="material-symbols:bookmark-sharp"
              color="black"
              width="30"
              height="30"
            />
            <div style={{ padding: '5px' }}>Bookmarks</div>
          </NavLink>
          <NavLink
            to="/liked"
            className="navlink-border"
            style={getActiveStyle}
          >
            <Icon
              icon="iconamoon:profile-fill"
              color="black"
              width="30"
              height="30"
            />
            <div style={{ padding: '5px' }}>Profile</div>
          </NavLink>
        </nav>
      </div>
      <div
        style={{
          overflowX: 'hidden',
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
      <div
        style={{
          textAlign: 'left',
          marginLeft: '10px',
          height: '100%',
          width: '100%',
        }}
      >
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Sort By</p>
        <select
          name="post"
          style={{ border: 'none', padding: '10px', backgroundColor: 'gray' }}
          value={StaticRange.sortTag}
          onChange={(e) => dispatch({ type: 'SORT', payload: e.target.value })}
        >
          <option value="select">select</option>
          <option value="latest">Latest Posts</option>
          <option value="most_upvote">Most Upvoted Post</option>
        </select>
      </div>
    </div>
  );
};
