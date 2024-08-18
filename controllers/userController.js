const User = require('../models/userModel');

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password });

    const user = await User.findOne({ username });
    console.log('User found:', user);

    if (user && user.password === password) {
      console.log('Login successful');
      return res.status(200).json({ message: 'Successfully submitted' });
    } else {
      console.log('Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Server error', error });
  }
};

const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
        const { username, password, name, email, phoneNumber, address } = req.body;

        // Validate input
        if (!username || !password || !name || !email || !phoneNumber || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create and save new user
        const newUser = new User({
            username,
            password, // Ensure to hash the password in a real application
            name,
            email,
            phoneNumber,
            address
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};
