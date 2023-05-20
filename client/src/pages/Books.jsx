import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Book from "../components/Book";

export const booksLoader = async () => {
  const res = await axios.get("/api/books");
  return res.data;
};

const Books = () => {
  const books = useLoaderData();
  return (
    <div className="books__container">
      <h1>Jay's Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            desc={book.desc}
            price={book.price}
            cover={book.cover}
            key={book.id}
          />
        ))}
      </div>
      <Link to="/add">
        <button className="btn add">Add new book</button>
      </Link>
    </div>
  );
};

export default Books;
