import ProfessionalTypeService from '../services/professionalTypeService';

class ProfessionalTypeController {
  constructor() {
    this.professionalTypeService = ProfessionalTypeService;
  }

  async list(_, res) {
    const data = await new ProfessionalTypeService().list();
    return res.json(data);
  }

  async getOne(req, res) {
    const id = req.params.id;
    const professionalType = await new ProfessionalTypeService().getOne(id);

    if (!professionalType) {
      throw 'Usuário não encontrado!';
    }

    return res.json(professionalType);
  }

  async create(data) {
    const professionalType = await this.professionalTypeService.create(data);
    return professionalType;
  }

  async update(id, data) {
    const professionalType = await this.professionalTypeService.update(
      id,
      data
    );
    return professionalType;
  }

  async delete(id) {
    await this.professionalTypeService.delete(id);
    return;
  }
}

export default new ProfessionalTypeController();
