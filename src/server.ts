import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const DB = process.env.DATABASE?.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD ?? '',
);

if (!DB) {
  throw new Error('DATABASE environment variable is not defined.');
}

async function connectToDb() {
  if (!DB) {
    throw new Error('Database connection string is undefined.');
  }

  try {
    await mongoose.connect(DB);
    console.log('DB connection is successful');
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

connectToDb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
