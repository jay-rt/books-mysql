import express from "express";
import booksRouter from "../routes/books.js";

const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
