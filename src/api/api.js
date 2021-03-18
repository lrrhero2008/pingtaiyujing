import request from "./axios";

// 获取地址接口
function getAddress(data) {
  return request({
    url: "/Api/getAddress",
    method: 'post',
    data
  });
}

//获取图片接口
function getImages(data) {
  return request({
    url: "/Api/getImages",
    method: 'post',
    data
  });
}
//获取商铺接口
function getStores(data) {
  return request({
    url: "/Api/getStores",
    method: 'post',
    data
  });
}

//商品销售排行
function getRank(data) {
  return request({
    url: "/api/papi/oms/sales-statistics/turnoverStatistics",
    method: 'get',
    data
  });
}

// 区域人流量统计综合：
function getHeatingPower(data) {
  return request({
    url: "/papi/stats/statsHeatingPower",
    params:{
      regionId: "57SX57LM",
      pcode: "f4490005750003",
      pkey:"3f8f4483f41c4470bbc3b10f65576265",
    },
    method: 'get',
    data
  });
}

export {
  getAddress,
  getImages,
  getStores,
  getRank,
  getHeatingPower
}