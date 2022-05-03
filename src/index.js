import React from "react";
import ReactDom from "react-dom";

//Nested components, react tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Hakan Demirel</h2>;
const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
