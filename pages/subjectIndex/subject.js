// pages/ subjectIndex/ subject.js
var API = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData:"",          //轮播图加载的数据
    menuTypeData: "",          //菜系种类的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    // 获取首页轮播图数据
    API.ajax('', function (res) {
      //这里既可以获取模拟的res
      that.setData({
        swiperData:res
      });
    });
    // 获取首页菜系种类数据
    API.eoLinkerAjax('/index/menuList',function(result){
      wx.hideLoading();
      that.setData({
        menuTypeData:result.data.data.list
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // 上拉加载
  upper:function(){
  },
  // 下拉刷新
  lower:function(){

  },
  watchDetail(){
    wx.navigateTo({
      url: '../subjectDetail/subjectDetail',
    })
  }
})