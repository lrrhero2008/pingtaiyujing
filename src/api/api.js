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

export {
  getAddress, 
  getImages, 
  getStores,
}