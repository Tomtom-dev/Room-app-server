const express= require('express');
const cors= require('cors')
const jsonParser= express.json();
const app= express();
const port = process.env.PORT || 4000;
const corsMiddleware =cors()

app.use(corsMiddleware)
app.use(jsonParser)

//routers
const roomPageRouter = require('./routers/room')
app.use("/", roomPageRouter)

const userAuthRouter = require ("./routers/users")
app.use("/signup", userAuthRouter)

const userLogin = require ("./routers/auth")
app.use("/login", userLogin)

app.listen(port, () => console.log(`listening on port ...${port}`)
)