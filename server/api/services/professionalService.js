import models from '../models';
import ProfessionalTypeService from './professionalTypeService.js';

export default class ProfessionalService {
  constructor() {
    this.professional = models.Professional;
    this.professionalTypeService = ProfessionalTypeService;
  }

  async list() {
    try {
      return await this.professional.findAll({ where: { situation: true } });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOne(id) {
    try {
      return this.professional.findOne({ where: { id, situation: true } });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(data) {
    try {
      return this.professional.create(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async update(body, id) {
    try {
      await this.professional.update(body, {
        where: { id },
        returning: true,
        plain: true,
      });
      return this.professional.findByPk(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async delete(id) {
    try {
      await this.professional.update({ situation: false }, { where: { id } });
      return;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
