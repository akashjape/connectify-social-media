import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching : false,
  deletePost: () => {},
  handleSearch: () => {},
  setSearchQuery: () => {}, // ✅ Function to update search query
  searchQuery: "" // ✅ Search input state
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE") {
    newPostList = currentPostList.filter(post => post.id !== action.payload.postId);
  } else if (action.type === "ADD") {
         newPostList = [action.payload, ...currentPostList]; // ✅ Only add valid objects
     } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Define search state
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD",
      payload: post,
         });
  };


  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: { postId },
    });
  };

  // ✅ Fix: Use `searchQuery` correctly inside `handleSearch`
  const handleSearch = () => {
    return postList.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };



 useEffect(()=>{

  const controller = new AbortController();
  const signal = controller.signal;

  setFetching(true);
  fetch("https://dummyjson.com/posts", { signal })
  .then((res) => res.json())
  .then((data) => {
    addInitialPost(data.posts);
    setFetching(false);
  })
  .catch((error) => console.error("Fetch error:", error));

  return ()=>{
    console.log("Cleaning Up...");
    controller.abort();
  }

 },[]);
  

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addInitialPost,
        handleSearch,
        searchQuery, // ✅ Now included in context
        setSearchQuery,
        fetching // ✅ Now included in context
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
