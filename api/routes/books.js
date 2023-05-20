import { Router } from "express";
import db from "../database/db.js";

const router = Router();

router.get("/", (req, res) => {
  const q = "SELECT * from books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/:id", (req, res) => {
  const q = "SELECT * from books WHERE id = ?";
  const bookId = req.params.id;
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});

router.post("/", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been created successfully.");
  });
});

router.delete("/:id", (req, res) => {
  const q = "DELETE FROM books WHERE id = ?";
  const bookId = req.params.id;

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been deleted successfully.");
  });
});

router.put("/:id", (req, res) => {
  const q =
    "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";
  const bookId = req.params.id;

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been updated successfully.");
  });
});

export default router;
