import { sequelize } from '../core/config/db.config';
import { DataTypes, Model } from 'sequelize';
import { NoteAttributes as INote } from './note.interface';

export class Note extends Model<INote> {
  declare id: string;
  declare title: string;
  declare content: string;
  declare customerId: string;
}

Note.init(
  {
    id: { primaryKey: true, type: DataTypes.STRING },
    title: { allowNull: false, type: DataTypes.STRING },
    content: { allowNull: false, type: DataTypes.STRING },
    customerId: {
      allowNull: false,

      references: { model: 'Users', key: 'id' },
      type: DataTypes.STRING,
    },
  },
  { sequelize, timestamps: true },
);
