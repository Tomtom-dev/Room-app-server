const {Router} = require ("express")

const roomPage = require('../models').room

const router = new Router();

router.get("/",async (req,res,next) => {
    try{
        const allRooms = await roomPage.findAll()
        console.log(allRooms);
        res.send(allRooms)
        
    }catch(error){
        next(error)
    }
})

module.exports= router;