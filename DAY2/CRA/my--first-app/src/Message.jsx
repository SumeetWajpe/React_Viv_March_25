import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.imageUrl ? (
          <img src={this.props.imageUrl} alt="" width="150px" height="100px" />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            alt=""
            width="150px"
            height="100px"
          />
        )} */}
        <img
          src={this.props.messagedetails.imageUrl}
          alt=""
          width="150px"
          height="100px"
        />

        <h1>{this.props.messagedetails.msg}</h1>
        <p>From : {this.props.messagedetails.from}</p>
        <p>To : {this.props.messagedetails.to}</p>
      </div>
    );
  }
}

export default Message;
