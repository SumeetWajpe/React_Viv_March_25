import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../ratings/ratings";

function CourseDetails() {
  const { courseid } = useParams();
  const [theCourse, setTheCourse] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3500/courses/" + courseid)
      .then(response => {
        setTheCourse(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

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
