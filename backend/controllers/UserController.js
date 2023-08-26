import User from "../models/User.js"

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  }catch(e) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
