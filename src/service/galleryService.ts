import GalleryModel from '../model/galleryModel';

class dataService {
  async getAll() {
    return await GalleryModel.find();
  }
}

export default new dataService();
