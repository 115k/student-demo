// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    recording: false,
  },
  onLoad() {

  },
  // 事件处理
  recordAll(){
    // 开始录音记录，获取临时文件，临时文件请求到后端语音识别API，识别出内容后，把内容显示到对应选项上
    wx.startRecord({
      success: (res) => {
        this.setData({recording: true})
        const tempFilePath = res.tempFilePath
      }
    })
    wx.stopRecord({
      success: (res) => {
        this.setData({recording: false})
      },
    })
  }

})
