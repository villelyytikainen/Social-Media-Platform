const errorHandling = (err, req, res, next) => {
    console.error(err);

    const status = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(status).json({
        error: {
            message: err.message,
            stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack, // Show stack trace in non-production environments
        },
    });
};

module.exports = {errorHandling};
