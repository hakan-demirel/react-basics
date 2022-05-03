import React from "react";
import ReactDom from "react-dom";

//Nested components, react tools

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};

const Author = () => {
  return <h4>Amelia Hepworth</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
