export default class ProfessionalService {
  constructor() {}
  async list() {
    return [];
  }
  async getOne(id) {
    return { id: id };
  }
  async create(data) {
    return data;
  }
}
