import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../Header'
import Footer from '../Footer';
import Sidebar from '../Sidebar';

import PostListProvider from '../store/PostListContext';

import { Outlet } from 'react-router-dom';

function App() {
  
 

  return (
    <PostListProvider>
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
     <Header/>
     {/* {selectedTab === "Home" ? <Postlist/> : <CreatePost/>}
      */}
     <Outlet/>
     <Footer/>

     </div>

    </div>
    </PostListProvider>
  )
}

export default App
