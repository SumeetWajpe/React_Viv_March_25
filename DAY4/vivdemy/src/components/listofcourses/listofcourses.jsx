import React, { useContext } from "react";
import Course from "../course/course";
import CoursesContext from "../context/coursescontext";

function ListOfCourses() {
  const courseCtx = useContext(CoursesContext);// Consumer

  return (
    <div>
      <h1>List of Courses</h1>

      <div className="row">
        {courseCtx.courses.map(course => (
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
