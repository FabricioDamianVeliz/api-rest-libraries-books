const ERROR_HANDLERS = {
    CastError: res =>
        res.status(400).send({
            error: 'The id used is malformed'
        }),

    TypeError: res =>
        res.status(400).send({
            error: 'The id used does not exist'
        }),

    ValidationError: (res, {message}) => 
        res.status(409).send({
            error: 'Field already exists'
        }),
    
    JsonWebTokenError: res =>
        res.status(401).json({
            error: 'Invalid username or password'
        }),

    TokenExpiredError: res =>
        res.status(401).json({
            error: 'Expired token'
        }),
    
    defaultError: res =>
        res.status(500).end()
}

module.exports = (error, req, res, next) => {
    
    // console.error(error.name);

    const handler =
        ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;

    handler(res, error);
}