import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./Message";
class App extends React.Component {
  messageOne = {
    msg: "Hello",
    to: "John",
    from: "Carter",
    imageUrl:
      "https://thumb.ac-illust.com/e2/e2cbae08aee6ed3c5fa742b33e936831_t.jpeg",
  };
  render() {
    return (
      <div>
        <Message messagedetails={this.messageOne} />
        {/* <Message
          msg="Hey"
          to="Peter"
          from="Parker"
          imageUrl="https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg"
        />
        <Message
          msg="Hi"
          to="James"
          from="Bond"
          imageUrl="https://t4.ftcdn.net/jpg/03/60/70/11/360_F_360701167_9dolp6h5cfm5i9uC8QObRzhog1mc1gI0.jpg"
        />
        <Message
          msg="Hola"
          to="John"
          from="McLaren"
          imageUrl="https://media.istockphoto.com/id/1026472782/vector/hola-sign-with-colorful-brush-strokes.jpg?s=612x612&w=0&k=20&c=YkVxUUhm8vfXF7TqTvcxZfaHBLlyY2TVXfhPucy5Elo="
        /> */}
      </div>
    );
  }
}

export default App;
