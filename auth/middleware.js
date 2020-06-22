const {toData} = require('./jwt')
const User = require('../models').user


 const authMiddleware = async (req,res,next) =>{
// check if there is an authorrization header with a token
const authHeader = req.headers.authorization && req.headers.authorization.split(" ");

if(authHeader && authHeader[0] === "Bearer"&& authHeader[1]){ //"BEARER <token>"
  //decode the token to get the userId  back
    try{
        const data = toData(authHeader[1])
        // add the user tothe request object
        const user= await User.findByPk(data.userId)

        if(!user){
            res.status(404).send("User doesnt exist")
        }else {
            req.user = user;
            next();
        }

    }catch (error){
        res.status(400).send(`${error.name}, ${error.message}`)
    }
    
    
}else{
    res.status(400).send("Bad request missing authorization header")
}


}

module.exports= authMiddleware;