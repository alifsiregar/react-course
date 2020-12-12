import BaseService from './baseService';
import API from '../config/rest';

const products = (limit, search) => {
  return BaseService.get(API.PRODUCTS(limit, search));
};

export default { products };
