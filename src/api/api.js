import request from "./axios";

// 获取地址接口
function getAddress(data) {
  return request({
    url: "/Api/getAddress/",
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

function delProjectApi(data) {
  return request({
    url: "/Api/Project/Add",
    method: 'post',
    data
  });
}

export {
  getAddress, // 1获取部门列表接口
  getImages, // 2添加项目接口
  delProjectApi, // 3删除项目接口
}