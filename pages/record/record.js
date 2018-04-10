const util = require('../../utils/util.js')

Page({
  data: {
    records: []
  },
  onLoad: function () {
    this.setData({
      records: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
