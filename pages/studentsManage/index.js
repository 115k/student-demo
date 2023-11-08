// pages/studentsManage/index.js
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
const firstGrid = [
    {
        label: '修改',
        image: 'refresh'
    },
    {
        label: '删除',
        image: 'delete-time'
    }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    list: [
        {
            name: '王小明',
            sex: '男',
            birthday: '2016-6',
            behavior: '玩游戏',
            date: '2023-11-8 20:30:50'
        },
        {
            name: '王小明',
            sex: '男',
            birthday: '2016-6',
            behavior: '玩游戏',
            date: '2023-11-8 20:30:50'
        },
        {
            name: '王小明',
            sex: '男',
            birthday: '2016-6',
            behavior: '玩游戏',
            date: '2023-11-8 20:30:50'
        },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

    edit(){
        const _this = this
        ActionSheet.show({
            theme: ActionSheetTheme.Grid,
            selector: '#t-action-sheet',
            context: _this,
            items: firstGrid,
        })
    },
    handleSelected(e) {
        console.log(e.detail);
    },
    userAdd(){
        wx.navigateTo({
          url: '/pages/index/index',
        })
    },
    sort(e){
        const { item } = e.currentTarget.dataset;

        this.setData(
            {
            cur: item,
            },
            () => {
            this.setData({ visible: true });
            },
        );
    },
    onVisibleChange(e){
        this.setData({
            visible: e.detail.visible,
          });
    },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})