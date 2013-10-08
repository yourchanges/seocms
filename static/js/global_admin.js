$(function(){
   tinyMCE.init({
                    // General options
                    language: "zh-cn",
                    mode : "exact",
                    elements : "abstract",
                    theme : "advanced",
                    plugins: "media",

                    // Theme options
                    theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,undo,redo,|,bullist,numlist,|,code",
                    theme_advanced_buttons2 : "",
                    theme_advanced_buttons3 : "",
                    theme_advanced_toolbar_location : "top",
                    theme_advanced_toolbar_align : "left",
                
                    valid_children : "+body[style]"
                });
				
   tinyMCE.init({
                    // General options
                    language: "zh-cn",
                    mode : "exact",
                    elements : "content",
                    theme : "advanced",
                    plugins : "autosave,style,advhr,advimage,advlink,preview,inlinepopups,media,paste,syntaxhl,wordcount",

                    // Theme options
                    theme_advanced_buttons1 : "formatselect,fontselect,fontsizeselect,|,bold,italic,underline,strikethrough,forecolor,|,advhr,blockquote,syntaxhl,",
                    theme_advanced_buttons2 : "undo,redo,|,bullist,numlist,outdent,indent,|,justifyleft,justifycenter,justifyright,justifyfull,|,pastetext,pasteword,|,link,unlink,image,iespell,media,|,cleanup,code,preview,",
                    theme_advanced_buttons3 : "",
                    theme_advanced_toolbar_location : "top",
                    theme_advanced_toolbar_align : "left",
                    theme_advanced_resizing : true,
                    theme_advanced_statusbar_location : "bottom",
                
                    extended_valid_elements: "link[type|rel|href|charset],pre[name|class],iframe[src|width|height|name|align],+a[*]",

                    valid_children : "+body[style]",
                    relative_urls: false,
                    remove_script_host: false,
                    oninit : function () {
                        if (typeof(conf.fun) === "function") {
                            conf.fun();
                        }
                    }
                });
	
	



});