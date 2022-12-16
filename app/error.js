const notFoundHandler = (req, res, next) => {
    const error = new Error('Resourse not found')
    error.status = 404;
    next(error);
}

const errorHandler = (error, req, res, next) => {
    if(error.status){
        return res.status(error.status).json({message: error.message})
    } else{
        res.status(500).json({message: 'something wrong'})
    }
}

module.exports = notFoundHandler;
module.exports = errorHandler;