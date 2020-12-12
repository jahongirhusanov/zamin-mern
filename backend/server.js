const express = require('express')
const products = require('./data/products')

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

app.listen(5000, console.log('Server running on 5000'))
