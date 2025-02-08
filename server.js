const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/jobportal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String
});

const Job = mongoose.model('Job', jobSchema);

// Job POST route (for adding jobs)
app.post('/post-job', async (req, res) => {
    const job = new Job(req.body);
    await job.save();
    res.status(200).send('Job posted successfully');
});

// Job GET route (for fetching jobs)
app.get('/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.status(200).json(jobs);
});

// User schema and routes (optional - for authentication)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// POST route for user registration
app.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();
    res.status(200).send('User registered');
});

// POST route for user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    
    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.status(200).json({ token });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
