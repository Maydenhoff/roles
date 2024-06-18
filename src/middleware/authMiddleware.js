require("dotenv").config()
const jwt = require("jsonwebtoken")
const authMiddleware = () => {
    return async(req, res,next) => {
        const accessToken = req.headers["authorization"]
        if(!accessToken) return res.status(404).send("Access denied")
            const token= accessToken.split(" ")[1]
            jwt.verify(token, process.env.SECRET, (err,user)=>{
            if(err){
                return res.status(400).send('Access denied, token expired or incorrect.')
            }else {
                // req.user = user
                // console.log(req.user);
                next()
                
            }
        })

    }
}

module.exports = authMiddleware