import axios from "axios";
import { Link } from "react-router-dom";

const Book = ({ id, title, desc, price, cover }) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/books/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="book">
      {cover && <img src={cover} alt="" />}
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{price}</span>
      <button className="btn delete" onClick={() => handleDelete(id)}>
        Delete
      </button>
      <Link to={`/update/${id}`}>
        <button className="btn update">Update</button>
      </Link>
    </div>
  );
};

export default Book;
