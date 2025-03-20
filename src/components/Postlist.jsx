import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from './store/PostListContext'
import Empty from './Empty'
import LoadingSpinner from './LoadingSpinner'

const Postlist = () => {
  const { postList,fetching, handleSearch, searchQuery} = useContext(PostListData);
  

const filteredPosts = handleSearch();


return (
  <div className="post-container">
    <div className="post-list">
      {fetching && <LoadingSpinner/>} 
      {!fetching && filteredPosts.length === 0 ? (
        !fetching && postList.length === 0 ? (
          <Empty />
        ) : (
          postList.map((post) => <Post key={post.id} post={post} />)
        )
      ) : (
        filteredPosts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  </div>
);

}
export default Postlist;
