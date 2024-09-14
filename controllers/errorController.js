// exports.get404 = (req, res, next) => {
//   res.status(404).json({
//     status: "Fail",
//     message: "Route not found on this server",
//   });
// };

exports.get404 = (req, res, next) => {
  const error = new Error("Route not found on this server.");
  error.staus = "Failed";
  error.statusCode = 404;
  res.status(error.statusCode).render("error", {
    title: "Error",
    error,
  });
};

const handleValidationError = (err) => {
  err.message = err.sqlMessage;
  err.status = "Bad request";
  err.statusCode = 400;
  return err;
};

exports.get500 = (err, req, res, next) => {
  let error = err;
  if (error.errno == 1292) error = handleValidationError(error);

  error.status = error?.status || "Error";
  error.statusCode = error?.statusCode || 500;
  error.message = error?.message || "Something went wrong!";

  if (req.originalUrl.startsWith("/api/v1")) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    res.status(error.statusCode).render("home", {
      title: "Error",
      error,
    });
  }
};
