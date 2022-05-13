import models from '../models';

class ProfessionalTypeService {
  constructor() {
    this.professionalType = models.ProfessionalType;
  }

  async list() {
    try {
      return await this.professionalType.findAll({
        where: { situation: true },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOne(id) {
    try {
      const professionalType = await this.professionalType.findByPk(id);
      if (!professionalType) {
        throw 'Tipo de Profissional não encontrado!';
      }
      return professionalType;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(data) {
    return await this.professionalType.create(data);
  }

  async update(id, data) {
    await this.getOne(id);
    return await this.professionalType.update(data, { where: { id } });
  }

  async delete(id) {
    await this.getOne(id);
    return await this.professionalType.destroy({ where: { id } });
  }
}

export default ProfessionalTypeService;
