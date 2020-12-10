import request from '@/utils/request';

export const getModel = () => {
  return request('abc/api/v1/datasets', {
    method: 'GET',
  });
};
