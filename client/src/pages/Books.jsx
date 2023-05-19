import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Book from "../components/Book";

export const booksLoader = async () => {
  const res = await axios.get("/api/books");
  return res.data;
};

const Books = () => {
  const books = useLoaderData();
  return (
    <>
      <h1>Jay's Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <Book
            title={book.title}
            desc={book.desc}
            price={book.price}
            cover={book.cover}
            key={book.id}
          />
        ))}
      </div>
    </>
  );
};

export default Books;
