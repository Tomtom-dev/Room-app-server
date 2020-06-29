const {Router} = require ("express");
const Message= require("../models").room_respond;
const router = new Router();






// get messages by roomId
router.get("/:roomId", async (req,res,next) =>{
    try{
        const{roomId}=req.params
        const allMessages = await Message.findAll({where:{roomId :roomId}});
        
        res.json(allMessages)
    }catch(error){
        next(error)
    }
})



//create a new message
router.post('/', async (req,res,next)=>{
   try{
    const {message,roomId,userId}=req.body

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






