import express, { type Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Booking from './models/Booking';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoUri = 'mongodb://gwm-user:gwm%4012345@ac-vsoougj-shard-00-00.kyjxo1k.mongodb.net:27017,ac-vsoougj-shard-00-01.kyjxo1k.mongodb.net:27017,ac-vsoougj-shard-00-02.kyjxo1k.mongodb.net:27017/gwm-bookings?ssl=true&replicaSet=atlas-cj0c48-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoUri, { family: 4 })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// Get all bookings (for Admin Dashboard)
app.get('/api/bookings', async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Create a new booking
app.post('/api/bookings', async (req: Request, res: Response) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(400).json({ error: 'Failed to create booking', details: error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
