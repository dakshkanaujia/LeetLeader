const userModel = require('../models/userModel');
const profileController = require('./profileController');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const checkUserResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${req.body.leetcodeProfile}`);
        const data = await checkUserResponse.json();

        if (data.errors) {
            return res.status(400).json({ message: "Invalid Leetcode Profile" });
        }

        const userExists = await userModel.findOne({ leetcodeProfile: req.body.leetcodeProfile });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = new userModel(req.body);
        await newUser.save();

        // Create or fetch the user's profile
        const profileResponse = await profileController.createOrFetchProfile(req.body.leetcodeProfile, req.body.username);

        if (!profileResponse.success) {
            return res.status(400).json({ message: profileResponse.message || profileResponse.error });
        }

        return res.status(201).json({
            success: true,
            message: "You've successfully signed up, please login now!",
            profile: profileResponse.profile
        });

    } catch (error) {
        console.error("Error in registering user:", error);
        return res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const userExists = await userModel.findOne({ leetcodeProfile: req.body.leetcodeProfile });

        
        if (!userExists) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Leetcode Profile",
            });
        }
        
        const validPassword = await bcrypt.compare(req.body.password, userExists.password);
        
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password",
            });
        }
        
        const profileResponse = await profileController.createOrFetchProfile(req.body.leetcodeProfile, req.body.username);
        return res.status(200).json({
            success: true,
            message: "Successfully Logged In",
        });

    } catch (error) {
        console.error("Error in logging in user:", error);
        return res.status(500).json({ error: error.message });
    }
};
