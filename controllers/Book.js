const addBook = async (req, res) => {
  res.json({
    msg: "Book Added",
  });
};

const getAllBooks = async (req, res) => {
  res.json({
    msg: "All Books",
  });
};

const getBook = async (req, res) => {
  const { id } = req.params;
  res.json({
    msg: `Single Book with id : ${id}`,
  });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  res.json({
    msg: `Update Book with id : ${id}`,
  });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  res.json({
    msg: `Delete Book with id : ${id}`,
  });
};

export { addBook, getAllBooks, getBook, updateBook, deleteBook };
