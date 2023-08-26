import Category from "../models/Category.js";

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.name })
    res.status(200).json(category)
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const addCategory = async (req, res) => {
  try {
    const { name } = req.body
    const category = new Category({ name })
    await category.save()
    res.status(200).json({ message: 'Data has been added.' })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const updateProduct = async (req, res) => {
  try {
    
  }catch(e) {
    
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id

    await Category.deleteOne({ _id: id })
    res.status(200).json({ message: 'Product has been deleted' })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}
