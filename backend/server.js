// const express = require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products')
import express from 'express'
import dotenv from 'dotenv'
import {
  notFound,
  errorHandler
} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

// GET to HomePage
app.get('/', (req, res) => {
  res.send('API is running....')
})

// GET to ProductPage
app.use('/api/products', productRoutes)

// For Not Found, file coming from middleware.js
app.use(notFound)

// when we get error, we throw back 500. file coming from middleware.js
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)
)