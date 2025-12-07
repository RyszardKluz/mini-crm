import { Op, WhereOptions } from 'sequelize';
import { FilterCustomerDTO } from './filterCustomer.schema';

export const buildCustomerWhere = (filters: FilterCustomerDTO) => {
  const where: WhereOptions = {};
  if (filters.name) {
    where.name = { [Op.like]: `%${filters.name}%` };
  }
  if (filters.email) {
    where.email = filters.email;
  }
  if (filters.status) {
    where.status = filters.status;
  }
  if (filters.phone) {
    where.phone = filters.phone;
  }

  if (filters.createdAt) {
    where.createdAt = {
      [Op.gte]: filters.createdAt,
    };
  }
  if (filters.userId) {
    where.userId = filters.userId;
  }
  return where;
};
