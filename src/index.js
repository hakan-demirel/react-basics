import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//CSS

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
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
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      Amelia Hepworth
    </h4>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
