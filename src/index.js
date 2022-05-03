import React from "react";
import ReactDom from "react-dom";

// Return single element

function Greeting() {
  return (
    <div>
      <section>
        <article>
          <h1>hello world</h1>
          <ul>
            <li>
              <a href="#">hello world</a>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
