import models from '../models';
import ProfessionalTypeService from './professionalTypeService.js';

export default class ProfessionalService {
  constructor() {
    this.professional = models.Professional;
    this.professionalTypeService = ProfessionalTypeService;
  }

  async list() {
    try {
      return await this.professional.findAll();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOne(id) {
    try {
      return this.professional.findByPk(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(data) {
    return this.professional.create(data);
  }
  async update(data) {
    return data;
  }
  async delete(data) {
    return data;
  }
}
