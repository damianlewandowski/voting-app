import postRequest from './postRequest';

export const createUser = (user) => {
  console.log(user);
  console.log(JSON.stringify(user));
  return postRequest('/api/user/create', user);
};
