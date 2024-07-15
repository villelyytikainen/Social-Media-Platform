const errorHandling = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    // Set a default error status if not already set
    const status = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(status).json({
        error: {
            message: err.message,
            stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack, // Show stack trace in non-production environments
        },
    });
};

module.exports = {errorHandling};
