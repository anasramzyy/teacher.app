import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connection.js'
import { appRouter } from './src/app.router.js'
// import mongoose from 'mongoose'
dotenv.config()
const app = express()
const port = process.env.PORT



// DB 
connectDB()
appRouter(app, express)
app.listen(8000, () => console.log(`Example app listening on port ${port}!`))  