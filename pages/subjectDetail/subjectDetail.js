// pages/subjectDetail/subjectDetail.js
var API = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ajaxFoodList();
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
    this.ajaxFoodList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // 请求数据
  ajaxFoodList(){

    let that = this;
    let menuId;

    wx.getStorage({
      key: 'menuId',
      success: function (res) {
        menuId = res.data;
      },
    });

    // 请求商品数据
    API.eoLinkerAjax('/menu/menuDetail', function (result) {
      wx.hideLoading();
      // 设置导航头
      wx.getStorage({
        key: 'detailTitle',
        success: function (res) {
          wx.setNavigationBarTitle({
            title: res.data,
          })
        },
      });
      that.setData({
        foodList: that.data.foodList.concat(result.data.data.menuList)
      })
    }, { menuId: menuId }, 'POST')
  }
})