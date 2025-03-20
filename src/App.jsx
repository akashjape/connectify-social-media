import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Postlist from './components/Postlist';
import CreatePost from './components/CreatePost';
import { useContext, useState } from 'react';
import PostListProvider, { PostList } from './components/store/PostListContext';
import Empty from './components/Empty';

function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
     <Header/>
     {selectedTab === "Home" ? <Postlist/> : <CreatePost/>}
     
     
     <Footer/>

     </div>

    </div>
    </PostListProvider>
  )
}

export default App
