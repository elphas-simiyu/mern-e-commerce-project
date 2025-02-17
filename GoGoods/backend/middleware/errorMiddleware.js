const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
      error: process.env.NODE_ENV === "development" ? err : {},
    });
  };
  
  const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
  };
  
  export { errorHandler, notFoundHandler };
  
