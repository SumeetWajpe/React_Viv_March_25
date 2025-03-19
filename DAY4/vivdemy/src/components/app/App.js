import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Message from "../message/message";
import Counter from "../counter/counter";
import Posts, { Add } from "../posts/posts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <a href="/">Courses</a> | <a href="/posts">Posts</a> */}
        {/* <Link to="/">Courses</Link> | <Link to="/posts">Posts</Link> */}
        <Navbar />
        <Routes>
          <Route path="/" Component={ListOfCourses} />
          <Route path="/posts" Component={Posts} />
          <Route path="/counter" Component={Counter} />

          <Route
            path="*"
            element={
              <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
