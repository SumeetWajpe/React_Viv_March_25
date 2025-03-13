import React from "react";
import "./message.css";
class Message extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem", height: "20rem" }}>
          <img
            src={this.props.messagedetails.imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.messagedetails.msg}</h5>
            <p className="card-text">To: {this.props.messagedetails.to}</p>
            <p className="card-text">From: {this.props.messagedetails.from}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
