import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Setup vars

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/518E56QKfQL._SX367_BO1,204,203,200_.jpg",
    title: "Our Class is a Family",
    author: " Shannon Olsen",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}
const Book = (props) => {
  const { img, title, author } = props;
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
