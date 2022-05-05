import { DataTypes } from 'sequelize';
import { database } from '../../database';

const Professional = database.define(
  'Professional',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    professionalTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'professional_type_id',
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
    tableName: 'professional',
  }
);

export default Professional;
