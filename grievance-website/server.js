const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
 // For MongoDB
const mysql = require('mysql2'); // For MySQL
const { Pool } = require('pg'); // For PostgreSQL
const multer = require('multer'); // For file uploads
require('dotenv').config(); // For environment variables

const app = express();
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Database connections (uncomment based on your DB choice)
// Connect to MongoDB (uncomment if using MongoDB)
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });


// Connect to MySQL (uncomment if using MySQL)
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'grievanceDB'
// });
// mysqlConnection.connect(err => {
//     if (err) throw err;
//     console.log('MySQL connected');
// });

// Connect to PostgreSQL
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'grievanceDB',
//     password: '',
//     port: 5432
// });
// pool.connect(err => {
//     if (err) throw err;
//     console.log('PostgreSQL connected');
// });

// Define a route for grievance submission
app.post('/submit-grievance', upload.single('file'), async (req, res) => {
    const { name, email, subject, description } = req.body;
    const file = req.file;

    // Validate the recipient email
    if (!email || !name || !subject || !description) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    try {
        const nodemailer = require('nodemailer');

// Create the transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Hemanthpusuluri2002@gmail.com', // Your email
    pass: 'czun oxlp jkrr dwbp',  // Your email password or app-specific password
  },
});
        /// Define the email options
let mailOptions = {
    from: 'your-email@gmail.com',        // Sender's email
    to: 'hemanthpusuluri2002@gmail.com',   // List of recipients
    subject: 'Subject of your email',    // Subject line
    text: 'Body of your email',          // Plain text body
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error submitting grievance:', error);
    }
    console.log('Email sent: ' + info.response);
  });

        // Send confirmation email to user
        await transporter.sendMail({
            from: 'no-reply@grievances.com',
            to: email,
            subject: 'Grievance Received',
            text: 'Thank you for submitting your grievance. We will address it shortly.'
        });

        res.json({ message: 'Grievance submitted successfully!' });
    } catch (error) {
        console.error('Error submitting grievance:', error);
        res.status(500).json({ message: 'Error submitting grievance.' });
    }
});


