import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

// @desc SignIn authentication
// @route POST  api/users/auth/signin
//  @access Public
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // If the user is not in the database
    if (!existingUser)
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist, please SignUp" });

    // If the User exists in the database, comparing the password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // If the password is incorrect
    if (!isPasswordCorrect)
      return res.status(400).json({
        success: false,
        message: "Invalid credentials, retry once",
      });

    // If the password is correct, generating a jsonwebtoken
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        isAdmin: existingUser.isAdmin,
      },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    // Sending the response
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc SignUp authentication
// @route POST /api/users/auth/signup
//  @access Public
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, isAdmin } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });

    // If the user is not in the database
    if (existingUser)
      return res
        .status(400)
        .json({
          success: false,
          message: "User already exists, please SignIn",
        });

    // If the User exists in the database, comparing the password
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ success: false, message: "Passwords don't match, retry once" });

    // If the passwords match with the database, hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Creating the user profile
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      isAdmin,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id, isAdmin: result.isAdmin },
      process.env.SECRET_KEY,
      {
        expiresIn: "5d",
      }
    );

    // Sending the response
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Getting all users and details by admin
// @route GET /api/users/
// @access Private
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
