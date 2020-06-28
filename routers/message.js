const {Router} = require ("express");
const Message= require("../models").room_respond;
const router = new Router();

// get all messages
router.get("/", async (req,res,next) =>{
    try{
        console.log("hellloooooooooooooooo");
        const allMessages = await Message.findAll();
        console.log(allMessages);
        
        res.json(allMessages)
    }catch(error){
        next(error)
    }
})


//create a new message
router.post('/', async (req,res,next)=>{



   try{
    const {message, answer,roomId,userId}=req.body

        const updated = await Message.create({
            message,
            roomId,
            userId
        })
        res.json(updated)
   }catch(error){
       next(error)
   }
})

module.exports = router;

// get message by roomId




