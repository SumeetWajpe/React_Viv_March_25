import { useEffect, useState } from "react"; // 16.8  version onwards
import axios from "axios";
import { Link } from "react-router-dom";

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
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(function (post) {
            return (
              <li key={post.id}>
                <Link to={"/postdetails/" + post.id}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
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
