import { valideProfessional } from './profissionalTestt';
import ProfessionalTypeController from '../server/api/controllers/ProfessionalTypeController';
import jest from 'jest';

const mockProfessionalType = {
  list: jest.fn(() => []),
  getOne: jest.fn((id) => valideProfessionalType()),
  create: jest.fn((data) => valideProfessionalType()),
  update: jest.fn((id, data) => {
    return { ...valideProfessionalType(), ...data };
  }),
  delete: jest.fn((id) => true),
};

jest.mock('../src/app/controllers/ProfessionalTypeController', () => {
  return jest.fn().mockImplementation(() => {
    return mockProfessionalType;
  });
});
