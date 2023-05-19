const Book = ({ title, desc, price, cover }) => {
  return (
    <div className="book">
      {cover && <img src={cover} alt="" />}
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{price}</span>
      <button className="btn delete">Delete</button>
      <button className="btn update">Update</button>
    </div>
  );
};

export default Book;
