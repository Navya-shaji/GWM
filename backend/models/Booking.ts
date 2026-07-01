import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  level: string;
  requirements?: string;
  status: string;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  service: { type: String, required: true },
  level: { type: String, required: true },
  requirements: { type: String },
  status: { type: String, default: 'Upcoming' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
