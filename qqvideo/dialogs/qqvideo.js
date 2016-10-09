(function() {
  var pluginName = 'qqvideo';
  function Dialog(editor) {
    //CKEDITOR.getUrl(CKEDITOR.plugins.get('image').path+'images/noimage.png');
    var dialog = null;
    var lang = editor.lang[pluginName];
    var path = CKEDITOR.plugins.get('qqvideo').path;
    return {
            title: lang.dialog.main.title,
            minWidth: 500,
            minHeight: 100,
            buttons: [
              CKEDITOR.dialog.okButton,
              CKEDITOR.dialog.cancelButton
            ],
            contents: [
              {
                'id': 'tab0',
                'label': lang.dialog.main.contents[0].label,
                'title': lang.dialog.main.contents[0].title,
                'elements': [
                  {
                    id:'url',
                    label:lang.dialog.main.contents[0].elements.url.label,
                    type:'text',
                    validate:CKEDITOR.dialog.validate.notEmpty(lang.dialog.main.contents[0].elements.url.validate.notempty),
                    commit:function(editor){
                      var url = this.getValue();
                      var vid = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
                      if (vid != null && vid !=''){
                        var iframeTemplateHtml = '<p>&nbsp;</p><iframe class="video_iframe" style="position:relative; z-index:1;" src="http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;width=auto&amp;height=250&amp;auto=0" allowfullscreen width="100%" frameborder="0" height="250"></iframe><p>&nbsp;</p>';
                        editor.insertHtml(iframeTemplateHtml);
                      } else {
                        alert(lang.dialog.main.contents[0].elements.url.commit.invalid);
                      }
                    }
                  }
                ]
              }
            ],
            onLoad: function() {
              // Act on tab switching
              this.on('selectPage', function (event) {
                this.foreach(function(element){ 
                });
              })
            },
            onShow: function() {
              dialog = CKEDITOR.dialog.getCurrent();
            },
            onHide: function() {
            },
            onOk: function() {
              this.commitContent(editor);
            },
            onCancel: function() {
            },
            resizable: CKEDITOR.DIALOG_RESIZE_BOTH
    };
  }

  CKEDITOR.dialog.add(pluginName, function(editor) {
    return Dialog(editor);
  });
})();