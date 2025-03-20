import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostList } from './store/PostListContext';

const Post = ({ post }) => {
  
  const { deletePost } = useContext(PostList);
  
  return (
    <>
      <div className="card post-card">
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>

    {/*Delete Badge*/}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
      onClick={()=>deletePost(post.id)}>
    <MdDelete />
  </span>

    {/* HashTags */}
  {post.tags.map((item)=>(
    <span key={item} className="badge text-bg-primary hashTag">
      {`${item}`}</span>))}

    {/* Reactions */}
  <div className="alert alert-success" role="alert">
  {`The number of peoples reacted ${post.reactions.likes}`}
</div>
  </div>
</div>
    </>
  )
}

export default Post
