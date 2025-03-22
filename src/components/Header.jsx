import React, { useContext, useState } from 'react';
import { PostList } from './store/PostListContext';
import logo from '../assets/connectify.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { setSearchQuery } = useContext(PostList);
  const location = useLocation(); // Get the current URL path

  return (
    <>
      <header className="p-3 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none headingInApp">
          <span className="fs-4">
            <img src={logo} alt="logo" className='logo' />Connectify
          </span>
        </Link>

        <div className="container headContainer">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start headContainer">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 headerList">
              <li>
                <Link
                  to="/"
                  className={`nav-link px-2 ${location.pathname === '/' ? 'active' : 'link-body-emphasis'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/create-post"
                  className={`nav-link px-2 ${location.pathname === '/create-post' ? 'active' : 'link-body-emphasis'}`}
                >
                  Add
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`nav-link px-2 ${location.pathname === '/settings' ? 'active' : 'link-body-emphasis'}`}
                >
                  Setting
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`nav-link px-2 ${location.pathname === '/profile' ? 'active' : 'link-body-emphasis'}`}
                >
                  Profile
                </Link>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searchBox" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
