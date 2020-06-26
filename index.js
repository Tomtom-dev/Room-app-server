const express= require('express');
const cors= require('cors')
const jsonParser= express.json();
const app= express();
const port = process.env.PORT || 4000;


app.use(cors())
app.use(jsonParser)

//routers
const roomPageRouter = require('./routers/room')
app.use("/", roomPageRouter)

app.listen(port, () => console.log(`listening on port ...${port}`)
)