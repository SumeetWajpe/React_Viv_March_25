import React, { useEffect, useState } from "react";
import Course from "../course/course";
import axios from "axios";

//

function ListOfCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3500/courses")
      .then(function (response) {
        setCourses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Courses</h1>

      <div className="row">
        {courses.map(course => (
          <Course key={course.id} coursedetails={course} />
        ))}
      </div>
    </div>
  );
}

export default ListOfCourses;

// class ListOfCourses extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>List of Courses</h1>

//         <div className="row">
//           {this.courses.map(course => (
//             <Course key={course.id} coursedetails={course} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
