import dataModel from '../model/dataModel';
import { IData } from '../model/dataModel';

class dataService {
  async createOne(book: IData): Promise<IData> {
    return await dataModel.create(book);
  }

  async getOne(id: string) {
    return await dataModel.findById(id);
  }
}

export default new dataService();
