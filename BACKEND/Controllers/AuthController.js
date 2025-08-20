const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { role, name, email, password } = req.body;
        
        
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ 
                message: 'Email is already registered. You can log in directly.', 
                success: false 
            });
        }

        
        const userModel = new User({
            name, 
            email, 
            password,
            role
        });

        
        userModel.password = await bcrypt.hash(password, 10);

       
        user = await userModel.save();

        res.status(201).json({
            message: "Signup successful!",
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        const { role, email, password } = req.body;

        
        const user = await User.findOne({ email });
        const errorMsg = 'Authentication failed: email or password is wrong';

        if (!user) {
            return res.status(403).json({ 
                message: errorMsg, 
                success: false 
            });
        }

        
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg, 
                success: false 
            });
        }

        
        if (role!== user.role) {
            return res.status(403).json({
                message: 'Role mismatch', 
                success: false 
            });
        }

        
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = {
    signup,
    login
}
