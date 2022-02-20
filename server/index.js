import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import postRoute from './routes/posts.js'

dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(cors());
app.use('/posts', postRoute)


mongoose.connect(process.env.MONGo_URL, ()=>{
    console.log("db connected");
})

app.listen(8000, ()=>{
    console.log("server started");
})