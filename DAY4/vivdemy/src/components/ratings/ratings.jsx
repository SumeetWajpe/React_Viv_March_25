import React from "react";

class Ratings extends React.Component {
  render() {
    var ratings = [];
    for (let i = 1; i <= this.props.noofstars; i++) {
      ratings.push(
        <span style={{ color: this.props.colour || "orange" }} key={i}>
          <i className="fa-solid fa-star"></i>
        </span>,
      );
    }

    return <>{ratings}</>;
  }
}

export default Ratings;
