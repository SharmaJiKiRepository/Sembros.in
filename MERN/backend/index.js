const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require("./routes");

const app = express();

// Middleware setup
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '10mb' })); // Increase limit if needed
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// API Routes
app.use("/api", router);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: true,
        message: "Internal Server Error"
    });
});

// Set PORT
const PORT = process.env.PORT || 8080;

// Connect to DB and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed:', err.message);
    process.exit(1);
});