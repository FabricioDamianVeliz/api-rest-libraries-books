const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const authorization = req.get('authorization');
    let token = '';

    if(authorization && authorization.toLowerCase().startsWith(process.env.KEYWORD)){
        token = authorization.substring(7);
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    //console.log(process.env.KEYWORD);
    //console.log(process.env.SECRET);
    //console.log(token);
    //console.log(decodedToken);

    /*if(!token || !decodedToken.id){
        return res.status(401).json({error: 'Missing or invalid token'});
    }*/

    const {id: userId} = decodedToken;

    req.userId = userId;

    next();
}