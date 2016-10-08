(function(){
  var pluginName = "qqvideo";
  CKEDITOR.plugins.add(pluginName, {
    lang:"zh-cn",
    onLoad: function(){
    },
    beforeInit: function(editor){
    },
    init: function(editor) {
            editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
            editor.ui.addButton(pluginName, {
              label: "腾讯视频",
              command: pluginName,
              icon: this.path + "images/icon.png"
            });
            CKEDITOR.dialog.add(pluginName, this.path + "dialogs/qqvideo.js");
    },
    afterInit: function(editor){
      
    }
  });
})();