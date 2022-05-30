import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/518E56QKfQL._SX367_BO1,204,203,200_.jpg",
  title: "Our Class is a Family",
  author: " Shannon Olsen",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          aperiam earum aut inventore maxime magnam deleniti, facilis recusandae
          neque modi!
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      {children}
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// We are accessing the props and we're rendering the book component.

ReactDom.render(<BookList />, document.getElementById("root"));
