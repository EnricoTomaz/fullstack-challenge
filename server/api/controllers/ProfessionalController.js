import ProfessionalService from '../services/professionalService';
class ProfessionalController {
  constructor() {}

  // eslint-disable-next-line no-unused-vars
  async list(_, res) {
    const data = await new ProfessionalService().list();
    return res.json(data);
  }

  async getOne(req, res) {
    const id = req.params.id;
    const professional = await new ProfessionalService().getOne(id);

    if (!professional) {
      throw 'Usuário não encontrado!';
    }

    return res.json(professional);
  }
  async create(req, res) {
    const body = req.body;
    const data = await new ProfessionalService().create(body);

    return res.json(data);
  }
}

export default new ProfessionalController();
