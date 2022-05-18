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

  async create(req, res) {
    const body = req.body;
    const professionalType = await new ProfessionalTypeService().create(body);
    return res.json(professionalType);

    //const professionalType = await this.professionalTypeService.create(data);
  }

  /* async update(id, data) {
    const professionalType = await this.professionalTypeService.update(
      id,
      data
    );
    return professionalType;
  } */
  async update(req, res) {
    const body = req.body;
    const id = req.params.id;
    const data = await new ProfessionalTypeService().update(body, id);

    return res.json(data);
  }

  /* async delete(id) {
    await this.professionalTypeService.delete(id);
    return;
  } */
  async delete(req, res) {
    await new ProfessionalTypeService().delete(req.params.id);
    return res.json();
  }
}

export default new ProfessionalTypeController();
