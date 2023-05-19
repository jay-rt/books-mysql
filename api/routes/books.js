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

export default router;
