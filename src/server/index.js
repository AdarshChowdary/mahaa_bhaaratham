import express from 'express';
import cors from 'cors';
import { query } from './db.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint to get all characters
app.get('/api/mahaabhaarathaam/characters', async (req, res) => {
  try {
    const result = await query('SELECT * FROM characters');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch characters' });
  }
});

// New endpoint to get character by name
app.get('/api/mahaabhaarathaam/characters/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const result = await query(
      'SELECT * FROM characters WHERE LOWER(name) = LOWER($1)',
      [name]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Character not found' 
      });
    }
    
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch character details' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
