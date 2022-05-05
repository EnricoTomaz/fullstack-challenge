import { DataTypes } from 'sequelize';
import { database } from '../../database';

const ProfessionalType = database.define(
  'ProfessionalType',
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    situation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATEONLY,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATEONLY,
    },
  },
  {
    tableName: 'professional_type',
  }
);

export default ProfessionalType;
