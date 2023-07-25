module.exports = (res, error) => {
  const { response } = error;
  if (response) {
    const { status, data } = response;
    const statusCode = status || 404;
    const errorMessage = data.error || "No existe el personaje";
    return res.status(statusCode).send(errorMessage);
  } else {
    return res.status(500).send("Internal server error");
  }
};
