import mongoose, { Document, Schema } from 'mongoose';

interface IGallery extends Document {
  name: string;
  description: string;
  logoUrl: string;
  id: Number;
  userWalletAddress: string;
}

const GallerySchema = new Schema<IGallery>({
    userWalletAddress: {
        type: String,
        required: true,
      },
});

const Gallery = mongoose.model<IGallery>('Gallery', GallerySchema);

export default Gallery;