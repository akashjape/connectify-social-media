import React, { useContext, useRef } from 'react'
import { PostList } from './store/PostListContext';
import logo from '../assets/connectify.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setSearchQuery } = useContext(PostList);



  return (
    <>
    <header className="p-3 border-bottom ">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none headingInApp ">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
     
      <span className="fs-4"> <img src={logo} alt="logo"  className='logo' />Connectify</span>
    </Link>

    <div className="container headContainer">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start headContainer">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 headerList">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/create-post" className="nav-link px-2 link-body-emphasis">Add</Link></li>
          <li><Link to="/" className="nav-link px-2 link-body-emphasis">Setting</Link></li>
          <li><Link to="/" className="nav-link px-2 link-body-emphasis">Profile</Link></li>
        </ul>
        
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searchBox" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)}/>
        </form>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle headingDp" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>

      </div>
    </div>
  </header>
    
    </>
  )
}

export default Header
