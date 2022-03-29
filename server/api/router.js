import * as express from 'express';
import ProfessionalController from './controllers/professionalController';

export default express
  .Router()
  .get('/', ProfessionalController.list)
  .get('/:id', ProfessionalController.getOne)
  .post('/', ProfessionalController.create)
  .put('/:id', ProfessionalController.update)
  .delete('/:id', ProfessionalController.delete);
