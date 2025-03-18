import { useEffect, useState } from "react"; // 16.8  version onwards
import axios from "axios";

function Posts() {
  var [posts, setPosts] = useState([]);
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setPosts(response.data); // setting the state here
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

// Named Export
// export function Add(x, y) {
//   return x + y;
// }

// // Private
// function Multiply(x, y) {
//   return x * y;
// }

export default Posts;
