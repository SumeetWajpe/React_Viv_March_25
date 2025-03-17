import React from "react";

function Ratings(props) {
  var ratings = [];
  for (let i = 1; i <= props.noofstars; i++) {
    ratings.push(
      <span style={{ color: props.colour || "orange" }} key={i}>
        <i className="fa-solid fa-star"></i>
      </span>,
    );
  }

  return <>{ratings}</>;
}

export default Ratings;
