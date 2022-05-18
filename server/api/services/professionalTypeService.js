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
      const professionalType = await this.professionalType.findOne({
        where: { id, situation: true },
      });
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
    try {
      return /* await */ this.professionalType.create(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /* async update(id, data) {
    await this.getOne(id);
    return await this.professionalType.update(data, { where: { id } });
  } */

  async update(body, id) {
    try {
      await this.professionalType.update(body, {
        where: { id },
        returning: true,
        plain: true,
      });
      return this.professionalType.findByPk(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /* async delete(id) {
    await this.getOne(id);
    return await this.professionalType.destroy({ where: { id } });
  } */
  async delete(id) {
    try {
      await this.professionalType.update(
        { situation: false },
        { where: { id } }
      );
      return;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default ProfessionalTypeService;
