import express from 'express';
import { GoogleGenAI } from '@google/genai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!genAI) {
      res.status(503).json({
        response: 'Chat is not configured yet. Please contact LY Cosmetics on WhatsApp for quick help.',
      });
      return;
    }
    
    const prompt = `You are a helpful customer service assistant for LY Cosmetics, a premium hair and beauty care brand based in Kampala, Uganda. 
    Our products include Hair Growth Oil priced at 25,000 UGX and hydrating lip glosses. 
    We offer WhatsApp ordering and delivery in Kampala.
    Answer customer questions helpfully and professionally.
    
    Customer question: ${message}`;
    
    const result = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });
    const response = result.text || 'Please contact LY Cosmetics on WhatsApp for quick help.';
    
    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
