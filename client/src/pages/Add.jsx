import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: 0,
    cover: "",
  });

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
      const res = await axios.post("/api/books", book);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
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
        Add
      </button>
    </div>
  );
};

export default Add;
