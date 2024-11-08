const express = require("express");
const {
  getAllBooks,
  getTenExchangeBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getIndividualExchangeBooks
} = require("../../Controller/ExchangeBooksController/ExchangeBooksController");
const verifyToken = require("../../Middleware/verifyToken");
const exchangeBooksRouter = express.Router();

// Get all exchangable books
exchangeBooksRouter.get("/exchange-books", getAllBooks);

// Get 10 exchangable books for home page
exchangeBooksRouter.get("/exchange-books-home", getTenExchangeBooks);

// Get a exchangable book by id
exchangeBooksRouter.get("/exchange-books/:id", getBookById);

// Get individual exchangable book by email
exchangeBooksRouter.get("/exchange-books-individual/:email", getIndividualExchangeBooks);

// Add a exchangable book
exchangeBooksRouter.post("/exchange-books", addBook);

// Update a exchangable book
exchangeBooksRouter.put("/exchange-books/:id", updateBook);

// Delete a exchangable book
exchangeBooksRouter.delete("/exchange-books/:id", deleteBook);

// Delete all exchangable books (use with caution)
// exchangeBooksRouter.delete("/exchange-books", deleteAllBooks);

module.exports = exchangeBooksRouter;
