import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams(); // fetch the id from the URL
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => {
        // console.log(response.data);
        setPost(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Post Details for {id} </h2>
      <p>User Id : {post.userId} </p>

      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
    </div>
  );
}

export default PostDetails;
