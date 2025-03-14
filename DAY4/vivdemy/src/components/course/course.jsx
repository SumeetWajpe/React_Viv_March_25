import React from "react";

class Course extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top"
            alt={this.props.coursedetails.title}
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>
            <p className="card-text">
              Rating : {this.props.coursedetails.rating}
            </p>
            <button className="btn btn-primary">
              {this.props.coursedetails.likes}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
