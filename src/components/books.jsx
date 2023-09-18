import "./books_style.css";
import book from "./logo192.png";

function Book() {
  return (
    <>
      <div className="books">
        <div className="book-card">
          <div className="book-image">
            <img src={book} alt="Image of the book" />
            <hr />
          </div>
          <div className="book-title">
            <p className="title">The Song of Achilies and</p>
          </div>
        </div>
        <div className="book-card">
          <div className="book-image">
            <img src={book} alt="Image of the book" />
            <hr />
          </div>
          <div className="book-title">
            <p className="title">The Song of Achilies and</p>
          </div>
        </div>
        <div className="book-card">
          <div className="book-image">
            <img src={book} alt="Image of the book" />
            <hr />
          </div>
          <div className="book-title">
            <p className="title">The Song of Achilies and</p>
          </div>
        </div>
        <div className="book-card">
          <div className="book-image">
            <img src={book} alt="Image of the book" />
            <hr />
          </div>
          <div className="book-title">
            <p className="title">The Song of Achilies and</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Book;
