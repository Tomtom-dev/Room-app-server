const {Router} = require ("express");

const Message= require("../models").room_respond;

const router = new Router();

// get all messages

router.get("/", async (req,res,next) =>{
    try{
        
        console.log("hellloooooooooooooooo");
        const allMessages = await Message.findAll();
        console.log(allMessages);
        
        res.send(allMessages)
    }catch(error){
        next(error)
    }
})

module.exports = router;

// get message by roomId

//create a new message