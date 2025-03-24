import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../ratings/ratings";
import CoursesContext from "../context/coursescontext";

function CourseDetails() {
  const { courseid } = useParams();
  const ctx = useContext(CoursesContext); // Consumer
  const theCourse = ctx.courses.find(course => course.id == courseid);

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <img src={theCourse.imageUrl} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-md-3">
          <h1>{theCourse.title}</h1>
          <Ratings noofstars={theCourse.rating} />
          <p>
            <button className="btn btn-primary">
              {theCourse.likes} <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </p>
          <div>{theCourse.description}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
