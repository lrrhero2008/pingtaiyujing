import Mock from 'mockjs'

const projectList = Mock.mock({
  "list|10": [{
  'name': '@cname', // 中文名
  'account': `@word`, // 英文单词
  'phone': /1[3-9][0-9]{9}/, // 正则模式
  'deptName': Mock.mock('@cword(2,4)'), // 随机2-4字中文单词
  'id': '@guid', // guid
  'address': '@county(true)'
 }]
})

export default [
  {
    url: '/Api/Project/GetList',
    type: 'post',
    response: () => {
        //let _fileter_list = [];
        // if(res.body.key){
        //   let _fileter_list = projectList.filter(i => i.name == res.body.key)
        //   return {
        //     code: 200,
        //     message: "操作成功",
        //     data: _fileter_list
        //   }
        // }

      // const allowed = ['name', 'address'];

      let _fileter_list = [];

      projectList.list.forEach(data => {
        _fileter_list.push(data['address'])
      });

      return {
        code: 200,
        message: "success",
        address: _fileter_list
      }
      // 使用return返回前端需要的数据
    }
  }
  // 多个接口
]