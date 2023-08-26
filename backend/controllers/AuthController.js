import User from "../models/User.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
  try {
    const { username, password } = req.body

    const duplicateUsername = await User.findOne({ username })

    if (duplicateUsername) return res.status(409).json({ message: 'Username already taken.' })

    const salt = await bcrypt.genSalt(10)
    const passwordHashed = await bcrypt.hash(password, salt)

    const user = new User({ username, password: passwordHashed })
    await user.save()
    res.status(200).json({ message: 'User has been added' })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) return res.status(401).json({ message: "Username not found!" })

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) return res.status(401).json({ message: 'Wrong password!' })

    res.status(200).json({
      message: 'Logged In!',
      username,
      password
    })
  }catch(e) {
    res.status(500).json({ message: 'Server network error.' })
  }
}
