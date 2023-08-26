import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getProduct = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findOne({ _id: id }).populate('category')
    res.status(200).json(product)
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.status(200).json(products)
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body

    const categoryid = await Category.findOne({ name: category })
    if (!categoryid) return res.status(404).json({ message: 'Category not found!' })

    const product = new Product({
      name,
      description,
      price,
      category: categoryid._id,
    });

    await product.save()
    res.status(200).json({ message: 'Product has been added.' })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const updateProduct = async (req, res) => {
  try {
    
  }catch(e) {

  }
}

export const delteProduct = async (req, res) => {
  try {
    const id = req.params.id

    await Product.deleteOne({ _id: id })
    res.status(200).json({ message: 'Product has been deleted' })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}
