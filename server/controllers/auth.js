import jwt from "jsonwebtoken";
import User from "../models/User.js";

const createUser = async (address) => {
  const newUser = new User({ address });
  const savedUser = await newUser.save();

  return savedUser;
};

// login user
export const login = async (req, res) => {
  try {
    const { address } = req.body;

    let newUser = null;
    let token = null;
    const user = await User.findOne({ address: address });
    if (!user) newUser = createUser(address);

    if (newUser) {
      token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
    } else {
      token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
    }
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAddress = async (req, res) => {
  try {
    const reqUser = req.user;
    const user = await User.findOne({ _id: reqUser.id });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
