export default class ProfessionalService {
  constructor(req) {
    this.req = req;
  }

  async list() {
    try {
      // Alguma coisa deve vir aqui. Mas oq ?
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOne(id) {
    try {
      return { id: id };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(data) {
    return data;
  }
  async update(data) {
    return data;
  }
  async delete(data) {
    return data;
  }
}
