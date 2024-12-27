const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test_db",
  connectionLimit: 10, // set connection limit
  waitForConnections: true, // allow waiting for a connection
  queueLimit: 0 // set to 0 to allow unlimited waiting
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database');
  connection.release();
});


// Create User
app.post("/register", async (req, res) => {
  const { firstName, lastName, mobileNumber, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "CALL CreateUser(?, ?, ?, ?)",
    [firstName, lastName, mobileNumber, hashedPassword],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User created successfully" });
    }
  );
});

// Get User
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  db.query("CALL GetUser(?)", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
});

// Update User
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, mobileNumber } = req.body;

  db.query(
    "CALL UpdateUser(?, ?, ?, ?)",
    [id, firstName, lastName, mobileNumber],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User updated successfully" });
    }
  );
});

// Delete User
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  db.query("CALL DeleteUser(?)", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted successfully" });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
