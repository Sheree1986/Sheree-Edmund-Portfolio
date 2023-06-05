//fs that executes during the req res cycle

//to overpass the default express error handler
const errHandler= (err,req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    res.json({
        message: err.message,
        status: statusCode
    })
}

module.exports = {
    errHandler,
}