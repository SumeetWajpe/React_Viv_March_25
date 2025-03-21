import { useParams } from "react-router-dom";

function CourseDetails() {
  const { courseid } = useParams();
  return <div> Course Details for {courseid} </div>;
}

export default CourseDetails;
