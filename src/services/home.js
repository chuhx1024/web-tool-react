import request from '@/utils/request';

// 获取数据概览
export const getModel = () => {
  return request('abc/api/v1/datasets', {
    method: 'GET',
  });
};

// 获取链上查询
export const getSearch = (id) => {
  return request(`abc/api/v1/model/datasets?some_id=${id}`);
};
