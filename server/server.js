require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/connectDB")
// const { use } = require("react")
const { log } = require("node:console")
const PORT = process.env.PORT || 2508
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())


app.use("/api/article",require("./routes/article"))
app.use("/api/task",require("./routes/task"))
app.use("/api/photo",require("./routes/photo"))
app.use("/api/user",require("./routes/user"))


 
 
 





mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})
mongoose.connection.on('error', err => {
    console.log(err)
})

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

