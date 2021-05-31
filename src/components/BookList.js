import React from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends React.Component {
  render() {
    console.log(this.context);

    return(
    <ThemeContext.Consumer>
      {(contextTheme) => (
        <BookContext.Consumer>
          {(contextBook) => {
            const {books} = contextBook;
            const { isDarkTheme, dark, light } = contextTheme;
            const theme = isDarkTheme ? dark : light;

            return (
              <section className="page-section" style={{background: theme.bg, color: theme.txt}} id="portfolio">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                      BookFolio
                    </h2>
                    <h3 className="section-subheading text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                  </div>
                  <div className="row">
                    {books.map((book, i) => {
                      return <Book book={book} key={i} />;
                    })}
                  </div>
                </div>
              </section>
            );
          }}
        </BookContext.Consumer>
      )}
    </ThemeContext.Consumer>
    );
  }
}

export default BookList;
