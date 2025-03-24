import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCourse() {
  const navigate = useNavigate();

  const [newcourse, setnewCourse] = useState({});

  return (
    <div>
      <h1>New Course</h1>
      <form
        onSubmit={e => {
          e.preventDefault(); // PREVENT THE PAGE FROM REFRESHING

          axios.post("http://localhost:3500/courses", newcourse).then(res => {
            if (res.data.title == newcourse.title) {
              navigate("/"); // programatic navigation
            }
          });
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
        <label htmlFor="txtCoursePrice"> Price : </label>
        <input
          type="number"
          id="txtCoursePrice"
          onInput={e => setnewCourse({ ...newcourse, price: +e.target.value })}
        />
        <br />
        <label htmlFor="txtCourseRating"> Rating : </label>
        <input
          type="number"
          id="txtCourseRating"
          onInput={e => setnewCourse({ ...newcourse, rating: +e.target.value })}
        />
        <br />
        <label htmlFor="txtCourseLikes"> Likes : </label>
        <input
          type="number"
          id="txtCourseLikes"
          onInput={e => setnewCourse({ ...newcourse, likes: +e.target.value })}
        />
        <br />
        <label htmlFor="txtCourseImageUrl"> Image Url : </label>
        <input
          type="text"
          id="txtCourseImageUrl"
          onInput={e =>
            setnewCourse({ ...newcourse, imageUrl: e.target.value })
          }
        />
        <br />
        <label htmlFor="txtCourseDescription"> Description : </label>
        <textarea
          rows={5}
          id="txtCourseDescription"
          onInput={e =>
            setnewCourse({ ...newcourse, description: e.target.value })
          }
        ></textarea>
        <br />

        <button className="btn btn-success mt-2">Add New Course</button>
      </form>
    </div>
  );
}

export default NewCourse;
