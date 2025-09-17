import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.VITE_DB_HOST || 'localhost',
  user: process.env.VITE_DB_USER || 'root',
  password: process.env.VITE_DB_PASSWORD || '',
  database: process.env.VITE_DB_NAME || 'tasty_recipes',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;