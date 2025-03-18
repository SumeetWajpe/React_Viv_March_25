import React from "react";
import Course from "../course/course";

//

function ListOfCourses() {
  var courses = ;

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
