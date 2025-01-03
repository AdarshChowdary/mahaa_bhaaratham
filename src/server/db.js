import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test the database connection
const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connection successful:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

testConnection();

export const query = (text, params) => pool.query(text, params);
