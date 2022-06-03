import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Setup vars

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/518E56QKfQL._SX367_BO1,204,203,200_.jpg",
    title: "Our Class is a Family",
    author: " Shannon Olsen",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51EA+bXwJsL._SY344_BO1,204,203,200_.jpg",
    title: "The Four Agreement",
    author: "Don Miguel Ruiz",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// We are accessing the props and we're rendering the book component.

ReactDom.render(<BookList />, document.getElementById("root"));
