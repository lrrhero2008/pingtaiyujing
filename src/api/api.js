import request from "./axios";

// 1获取部门列表接口
function getProjectListApi(data) {
  return request({
    url: "/Api/Project/GetList",
    method: 'post',
    data
  });
}

// 2添加项目接口
function addProjectApi(data) {
  return request({
    url: "/Api/Project/Add",
    method: 'post',
    data
  });
}

// 3删除项目接口
function delProjectApi(data) {
  return request({
    url: "/Api/Project/Add",
    method: 'post',
    data
  });
}

export {
  getProjectListApi, // 1获取部门列表接口
  addProjectApi, // 2添加项目接口
  delProjectApi, // 3删除项目接口
}