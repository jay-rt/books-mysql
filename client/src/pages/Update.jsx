import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: 0,
    cover: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getBook = async () => {
      try {
        const res = await axios.get(`/api/books/${id}`, { signal: signal });
        setBook(res.data);
      } catch (err) {
        console.log(err.messages);
      }
    };
    getBook();

    return () => {
      //cancels the requests before the components unmount
      controller.abort();
    };
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/books/${id}`, book);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        name="title"
        value={book.title}
        placeholder="Book Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        value={book.desc}
        placeholder="Book Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={book.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        value={book.cover}
        placeholder="Book's cover image link"
        onChange={handleChange}
      />
      <button className="form__btn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
