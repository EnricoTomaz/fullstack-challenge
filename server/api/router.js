import * as express from 'express';
import ProfessionalController from './controllers/ProfessionalController';
import ProfessionalTypeController from './controllers/ProfessionalTypeController';

export default express
  .Router()
  .get('/professional_type', ProfessionalTypeController.list)
  .get('/professional_type/:id', ProfessionalTypeController.getOne)
  .get('/', ProfessionalController.list)
  .get('/:id', ProfessionalController.getOne)
  .post('/', ProfessionalController.create)
  .put('/:id', ProfessionalController.update)
  .delete('/:id', ProfessionalController.delete);
