CKEDITOR.plugins.setLang('qqvideo', 'zh-cn', {
  button:{
    label: '腾讯视频'
  },
  dialog: {
    main: {
      title: '插入腾讯视频',
      contents:[
        {
          label:'腾讯视频',
          title:'腾讯视频',
          elements: {
            url:{
              label:'视频网址',
              validate: {
                notempty:'请输入视频网址'
              },
              commit:{
                invalid:'无法识别出视频地址'
              }
            }
          }
        }
      ]
    }
  }
});