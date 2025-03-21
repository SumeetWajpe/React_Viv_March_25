import { useState } from "react";

function NewCourse() {
  // const [id, setId] = useState("");
  // const [title, setTitle] = useState("");

  const [newcourse, setnewCourse] = useState({});

  return (
    <div>
      <h1>New Course</h1>
      <form
        onSubmit={e => {
          e.preventDefault(); // PREVENT THE PAGE FROM REFRESHING
          console.log(newcourse);
        }}
      >
        <label htmlFor="txtCourseId"> Id : </label>
        <input
          type="number"
          id="txtCourseId"
          onInput={e => setnewCourse({ ...newcourse, id: +e.target.value })}
        />
        <br />
        <label htmlFor="txtCourseTitle"> Title : </label>
        <input
          type="text"
          id="txtCourseTitle"
          onInput={e => setnewCourse({ ...newcourse, title: e.target.value })}
        />
        <br />
        <button className="btn btn-success">Add New Course</button>
      </form>
    </div>
  );
}

export default NewCourse;
