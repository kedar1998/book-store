import BadRequestError from "../errors/bad-request.js";
import Book from "../models/Book.js";
import checkPermissions from "../utils/checkpermissions.js";
import NotFoundError from "../errors/not-found.js";

const addBook = async (req, res) => {
  const { title, summary } = req.body;

  if (!title || !summary) {
    throw new BadRequestError("Provide both title and summary");
  }

  const author = req.user.userId;

  const book = await Book.create({ title, summary, author });

  res.json({
    book,
  });
};

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.json({
    books,
  });
};

const getBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findOne({ _id: id });

  if (!book) {
    throw new BadRequestError(`No Book with id : ${id}`);
  }

  res.json({
    book,
  });
};

const updateBook = async (req, res) => {
  const { id } = req.params;

  const { title, summary } = req.body;

  if (!title || !summary) {
    throw new BadRequestError("Provide both title and summary");
  }

  const book = await Book.findById({ _id: id });

  if (!book) {
    throw new NotFoundError(`No book with id : ${id}`);
  }

  checkPermissions(req.user, book.author);

  const updatedBook = await Book.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    msg: "Successfull Updated Book",
    updatedBook,
  });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById({ _id: id });

  if (!book) {
    throw new NotFoundError(`No book with id : ${id}`);
  }

  checkPermissions(req.user, book.author);

  const deletedBook = await Book.findByIdAndDelete({ _id: id });

  res.json({
    msg: "Successfull deleted Book",
    deletedBook,
  });
};

export { addBook, getAllBooks, getBook, updateBook, deleteBook };
