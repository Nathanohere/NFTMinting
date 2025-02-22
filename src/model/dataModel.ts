import mongoose, { Document, Schema } from 'mongoose';

export interface IData extends Document {
  name: string;
  description: string;
  logoUrl: string;
  userWalletAddress: string;
}

const dataSchema = new Schema<IData>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  userWalletAddress: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model<IData>('Data', dataSchema);

export default Data;
