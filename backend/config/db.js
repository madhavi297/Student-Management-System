/**
 * MySQL Database Configuration
 * Uses connection pooling for scalability
 */

const mysql = require("mysql2");

// ==========================
// CREATE CONNECTION POOL
// ==========================
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Chintareddy@13",
  database: process.env.DB_NAME || "student_management_system",

  waitForConnections: true,
  connectionLimit: 10,      // max concurrent connections
  queueLimit: 0
});

// ==========================
// TEST DATABASE CONNECTION
// ==========================
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1); // stop server if DB fails
  }

  console.log("✅ MySQL connected successfully");
  connection.release();
});

// ==========================
// EXPORT POOL
// ==========================
module.exports = db;

