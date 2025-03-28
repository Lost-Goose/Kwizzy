const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'kwizzy_db' // Replace with your database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Registration endpoint
app.post('/register', (req, res) => {
    const { fullName, email, password } = req.body;
    const query = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';
    db.query(query, [fullName, email, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered successfully');
        }
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging in');
        } else if (results.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});