const notFound = (req, res) =>
  res.status(404).send("Invalid route (This route don't exists)");

export default notFound;
