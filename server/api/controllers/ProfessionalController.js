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
      return res.json('Usuário não encontrado!');
    }

    return res.json(professional);
  }

  async create(req, res) {
    // added docstring
    try {
      const body = req.body;
      const data = await new ProfessionalService().create(body);
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  }
  async update(req, res) {
    const body = req.body;
    const id = req.params.id;
    const data = await new ProfessionalService().update(body, id);

    return res.json(data);
  }

  async delete(req, res) {
    await new ProfessionalService().delete(req.params.id);
    return res.json();
  }
}

export default new ProfessionalController();
