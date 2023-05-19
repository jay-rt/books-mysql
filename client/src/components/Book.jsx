const Book = ({ title, desc, price, cover }) => {
  return (
    <div className="book">
      {cover && <img src={cover} alt="" />}
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{price}</span>
    </div>
  );
};

export default Book;
