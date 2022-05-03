import React from "react";
import ReactDom from "react-dom";

// Always return JSX

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
