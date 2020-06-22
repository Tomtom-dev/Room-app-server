const { Router } = require("express")
const bcrypt= require ('bcrypt')

const User = require ("../models").user;


const router = new Router();

router.get("/", async (req,res,next)=>{
    try{
        const users = await User.findAll();
        res.send(users)
    }catch(error){
        next(error)
    }
})

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
        }
 
        console.log(email,password,age,name);
        res.send("creating a user")
    }catch(error) {
        next(error)
    }
})

module.exports = router;