import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./Message";

class App extends React.Component {
  messages = [
    {
      msg: "Hello",
      to: "John",
      from: "Carter",
      imageUrl:
        "https://thumb.ac-illust.com/e2/e2cbae08aee6ed3c5fa742b33e936831_t.jpeg",
    },
    {
      msg: "Hey",
      to: "Peter",
      from: "Parker",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg",
    },
    {
      msg: "Hello",
      to: "John",
      from: "Carter",
      imageUrl:
        "https://thumb.ac-illust.com/e2/e2cbae08aee6ed3c5fa742b33e936831_t.jpeg",
    },
    {
      msg: "Hey",
      to: "Peter",
      from: "Parker",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg",
    },
    {
      msg: "Hello",
      to: "John",
      from: "Carter",
      imageUrl:
        "https://thumb.ac-illust.com/e2/e2cbae08aee6ed3c5fa742b33e936831_t.jpeg",
    },
    {
      msg: "Hey",
      to: "Peter",
      from: "Parker",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg",
    },
  ];
  render() {
    return (
      <div className="row">
        {this.messages.map(m => (
          <Message messagedetails={m} />
        ))}
      </div>
    );
  }
}

// class App extends React.Component {
//   messages = [
//     {
//       msg: "Hello",
//       to: "John",
//       from: "Carter",
//       imageUrl:
//         "https://thumb.ac-illust.com/e2/e2cbae08aee6ed3c5fa742b33e936831_t.jpeg",
//     },
//     {
//       msg: "Hey",
//       to: "Peter",
//       from: "Parker",
//       imageUrl:
//         "https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg",
//     },
//   ];
//   render() {
//     return (
//       <div>
//         {this.messages.map(m => (
//           <Message messagedetails={m} />
//         ))}
//       </div>
//     );
//   }
// }

export default App;
