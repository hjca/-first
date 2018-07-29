import mockData from "mockData.js"
let API_HOST = "https://result.eolinker.com/jhIA54bf032c65266cb6cc9db5035ad7407be6f608e5164?uri=";
let DEBUG = true;//切换数据入口
var Mock = require('mock.js')
// 获取首页轮播图数据
function ajax(data = '', fn, method = "get", header = {}) {
  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {
    // 模拟数据
    var res = Mock.mock(mockData.indexSwiper)
    // 输出结果
    // console.log(JSON.stringify(res, null, 2))
    fn(res);
  }
}

// 获取首页菜系种类数据
function ajaxMenu(data = '', fn, method = "get", header = {}) {
  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {
    // 模拟数据
    var res = Mock.mock(mockData.indexMenuClassfiy)
    // 输出结果
    // console.log(JSON.stringify(res, null, 2))
    fn(res);
  }
}

// 使用eoLinker获取首页菜系数据
function eoLinkerAjax(url,successFun,data,method="GET",leary='1',header={}){
  // 是否显示Loadding
  if(leary == 1){
    wx.showLoading({
      title:"请稍后...",
      mask:true
    })
  }
  wx.request({
    url: API_HOST + url,
    method: method,
    data: data,
    header: header ? header : { "Content-Type": "application/json" },
    success: function (res) {
      successFun(res);
    },
    fail:function(){
      wx.hideLoading()
    }
  });
}

module.exports = {
  ajax: ajax,
  ajaxMenu: ajaxMenu,
  eoLinkerAjax: eoLinkerAjax
}