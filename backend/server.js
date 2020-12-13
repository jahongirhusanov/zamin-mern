// const express = require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products')
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()

const app = express()

// GET to HomePage
app.get('/', (req, res) => {
  res.send('API is running....')
})

// GET to All Products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// GET to single Product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)