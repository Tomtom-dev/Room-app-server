const { Router } = require("express")
const bcrypt= require ('bcrypt')

const User = require ("../models").user;

const router = new Router();

// get all users

router.get("/", async (req,res,next)=>{
    try{
        const users = await User.findAll();
        res.send(users)
    }catch(error){
        next(error)
    }
})

// create a new user with Signup

router.post('/',async (req,res,next) => {
    try{
        const {email,password,age,name}=req.body

        if(!password || !email || !age || !name){
            res.status(400).send("missing some user parameters")
        }else{
            const hashedPassword = bcrypt.hashSync(password, 10)

            const newUser= await User.create({
                email,
                password : hashedPassword,
                age,
                name,
            })
            res.send(newUser)
        }
    }catch(error) {
        next(error)
    }
})

module.exports = router;