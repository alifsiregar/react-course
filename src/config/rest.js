export default {
  LOGIN: '/login',
  PRODUCTS: (limit, search) => {
    return `/product?limit=${limit}&offset=0&search=${search}`;
  },
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
