import React, { useContext, useState } from "react";
import Ratings from "../ratings/ratings";
import { Link } from "react-router-dom";
import CoursesContext from "../context/coursescontext";

var Course = props => {
  const ctx = useContext(CoursesContext);

  function IncrementLikes() {
    console.log("IncrementLikes");
    var course = ctx.courses.find(c => c.id == props.coursedetails.id);
    course.likes++;
    ctx.setCourses([...ctx.courses]);
  }

  return (
    <div className="col-md-3 mt-1">
      <div className="card">
        <Link to={"/coursedetails/" + props.coursedetails.id}>
          <img
            src={props.coursedetails.imageUrl}
            className="card-img-top"
            alt={props.coursedetails.title}
            height="175px"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <p className="card-text">₹. {props.coursedetails.price}</p>
          <p className="card-text">
            {/* Rating : {this.props.coursedetails.rating} */}
            <Ratings noofstars={props.coursedetails.rating} />
          </p>
          <button className="btn btn-primary" onClick={() => IncrementLikes()}>
            {/* {this.props.coursedetails.likes}{" "} */}
            {props.coursedetails.likes}{" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// class Course extends React.Component {
//   state = { currLikes: this.props.coursedetails.likes };
//   IncrementLikes() {
//     console.log("IncrementLikes");
//     // this.props.coursedetails.likes++; // props are readonly
//     // console.log(this.props.coursedetails.likes);
//     // this.state.currLikes++; // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render() {
//     console.log("Within Render - Course Component");
//     return (
// <div className="col-md-3">
//   <div className="card">
//     <img
//       src={this.props.coursedetails.imageUrl}
//       className="card-img-top"
//       alt={this.props.coursedetails.title}
//       height="175px"
//     />
//     <div className="card-body">
//       <h5 className="card-title">{this.props.coursedetails.title}</h5>
//       <p className="card-text">₹. {this.props.coursedetails.price}</p>
//       <p className="card-text">
//         {/* Rating : {this.props.coursedetails.rating} */}
//         <Ratings noofstars={this.props.coursedetails.rating} />
//       </p>
//       <button
//         className="btn btn-primary"
//         onClick={() => this.IncrementLikes()}
//       >
//         {/* {this.props.coursedetails.likes}{" "} */}
//         {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
//       </button>
//     </div>
//   </div>
// </div>
//     );
//   }
// }

export default Course;
