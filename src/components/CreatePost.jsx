import React, { useContext, useRef } from 'react'
import { PostList } from './store/PostListContext';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const idElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {

    e.preventDefault();

   const postId =  idElement.current.value; 
   const postTitle =  titleElement.current.value; 
   const postContent =  contentElement.current.value; 
   const postReaction =  reactionElement.current.value; 
   const postTags =  tagsElement.current.value.split(" "); 

   idElement.current.value = "";
   titleElement.current.value = "";
   contentElement.current.value = "";
   reactionElement.current.value = "";
   tagsElement.current.value = "";
  
   fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitle,
      body: postContent,
      reactions: {likes :postReaction},
      tags: postTags,
      userId: postId,
    })
  })
  .then(res => res.json())
  .then((post) => {
    addPost(post);
    navigate("/");
    
  
  });
  
  
  }


  

  return (
    <>
      <form className='create-post' onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="userID" className="form-label">User ID</label>
    <input ref={idElement} type="text" className="form-control" id="userID" aria-describedby="emailHelp" placeholder='Enter your ID' required/>
  </div>
 

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input  ref={titleElement} type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder='Share Something Happily...' required/>
  </div>

  <div className="mb-3">
    <label htmlFor="content" className="form-label">Content</label>
    <textarea  ref={contentElement} rows={4} type="text" className="form-control" id="content" aria-describedby="emailHelp" placeholder='Add more about post.....' required/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input  ref={reactionElement} type="text" className="form-control" id="userID" aria-describedby="emailHelp" placeholder='Enter  number reactions' required/>
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Hashtags</label>
    <input  ref={tagsElement} type="text" className="form-control" id="tag" aria-describedby="emailHelp" placeholder='Enter hashtags...' required/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  )
}

export default CreatePost
