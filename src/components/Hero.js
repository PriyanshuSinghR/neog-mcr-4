import { Icon } from '@iconify/react';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { forumData } from '../data';

export const Hero = ({ children }) => {
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
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
        <div style={{ display: 'flex', paddingLeft: '100px' }}>
          <img
            src={forumData.picUrl}
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50% 50%',
              marginRight: '10px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '14px',
                color: 'black',
                margin: '0',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              @{forumData.name}
            </p>

            <p
              style={{
                fontSize: '14px',
                color: 'gray',
                margin: '0',
                marginTop: '5px',
                textAlign: 'left',
              }}
            >
              @{forumData.username}
            </p>
          </div>
        </div>
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
