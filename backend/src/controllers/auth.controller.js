import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/GenerateToken.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name.trim() || !email.trim() || !password.trim()) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password: hashedPassword });
        if (user) {
            generateToken(user._id, res);
            const newUser = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            res.status(201).json({ message: "User created successfully", newUser });
        }
    } catch (error) {
        console.error("Error in register controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email.trim() || !password.trim()) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        generateToken(user._id, res);
        const newUser = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        res.status(200).json({ message: "Login successful", newUser });
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        partitioned: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: "Logout successful" });
};

export const getMe = (req, res) => {
    res.status(200).json(req.user);
};