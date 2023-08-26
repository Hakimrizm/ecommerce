import './libs/database.js'
import express from 'express'
import cors from 'cors'
import { getAllUser } from './controllers/UserController.js'
import { register, login } from './controllers/AuthController.js'
import { addCategory } from './controllers/CategoryController.js'
import { addProduct, getAllProduct, getProduct, delteProduct } from './controllers/ProductController.js'

const app = express()
const corsOptions = {
  origin: 'http://localhost:5173'
};

app.use(express.json())
app.use(cors(corsOptions))

// User
app.get('/api/user', getAllUser)

// Auth
app.post('/api/auth/register', register)
app.post('/api/auth/login', login)

// Category
app.post('/api/category', addCategory)

// Product
app.get('/api/product/:id', getProduct)
app.get('/api/product', getAllProduct)
app.post('/api/product', addProduct)
app.delete('/api/product/:id', delteProduct)

const PORT = 3000
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})
