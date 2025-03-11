import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./Message";
class App extends React.Component {
  render() {
    return (
      <div>
        <Message msg="Hello" to="John" from="Carter" />
        <Message msg="Hey" to="Peter" from="Parker" />
        <Message msg="Hi" to="James" from="Bond" />
        <Message msg="Hola" to="John" from="McLaren" />
      </div>
    );
  }
}

export default App;
