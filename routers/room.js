const {Router} = require ("express")

const roomPage = require('../models').room

const router = new Router();

// get all the rooms
router.get("/",async (req,res,next) => {
    try{
        const allRooms = await roomPage.findAll()
        console.log(allRooms);
        res.send(allRooms)
        
    }catch(error){
        next(error)
    }
})

// get a room by id
router.get("/:id", async (req,res,next)=>{
    const {id}= req.params;

    if (isNaN(parseInt(id))) {
        return res.status(400).send({ message: "Room id is not a number" });
      }
      const roomSelected = await roomPage.findByPk(id)
    
    if (roomSelected === null){
        return res.status(404).send({ message: "Homepage not found" });
    }

    res.status(200).send({ message: "ok", roomSelected});
})

// create a new room post

router.post('/', async(req,res,next) =>{
    try{
        const {title,location,description,image,userId} = req.body 

        const updated= await roomPage.create({
            title,
            location,
            description,
            image,
            userId
        })
        res.json(updated)
    }catch(error){
        next(error)
    }
})

module.exports= router;