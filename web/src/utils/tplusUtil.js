
/* ========================================================================
 * Tplus UI : dialog.js v12 
 * ========================================================================
 * Copyright 2011-2015 Chanjet, Inc. 
 * ======================================================================== */

+function ($) {
    var dialogManager = [];
    var dialogTemplate = '<div class="modal fade" id="{0}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> \
            <div class="modal-dialog"> \
                <div class="modal-content">\
                    <div class="modal-header">\
                        <button type="button" class="close"  data-dismiss="modal">\
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                        <h4 class="modal-title"></h4>\
                    </div>\
                    <div class="modal-body">\
                    </div>\
                </div>\
            </div>\
        </div>';

    $.fn.dialog = function (id, isIncrease) {

        isIncrease === true && (id += dialogManager.length);

        for (var i = 0; i < dialogManager.length; ++i) {
            var obj = dialogManager[i];
            if (obj.id == id) {
                return obj.obj;
            }
        }

        var ele = $('#modal-template');
        var template = (ele.length == 0 ? dialogTemplate : ele.html());
        template = template.replace('{0}', id);
        var ret = $(template);
        $(document.body).append(ret);

        ele = $('#' + id);

        if (dialogManager.length > 0) {
            var base = Number(dialogManager[dialogManager.length - 1].obj.css('z-index'));
            ele.css('z-index', 1000 + base + 20);
            var back = ele.siblings('.modal-backdrop');

            ele.siblings('.modal-backdrop').last().css('z-index', base + 10);
        }
        dialogManager.push({ id: id, obj: ret, zIndex: ele.css('z-index') });

        return ret;
    }

    $.fn.dialog.dialogManager = dialogManager;

    $.showMessageBox = function (title, text, fn) {
        if (typeof text == "function") {
            fn = text;
            text = title;
            title = null;
        }
        var bodyText = $(".modal.fade.in .modal-body .hide");
        var isOpen = false;
        if (bodyText) {
            for (var i = 0; i < bodyText.length; i++) {
                if (text.indexOf($(bodyText[i]).text()) > -1) {
                    isOpen = true;
                }
            }
        }
        if (isOpen) return;
        var ele = $('myModal');
        var shown = ele.css('display');
        if (shown != 'block') {
            dialog = $().dialog('myModal', true);
        }
        else {
            dialog = $().dialog('myModal');
        }

        var defaultButton = $("<div class=\"modal-footer\"><button type=\"button\" id=\"yes\" class=\"btn btn-primary\">确定</button><button type=\"button\" id=\"cancel\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button></div>");
        if (title)
            dialog.find('.modal-title').html(title);
        dialog.find('.modal-content').append(defaultButton);
        dialog.find('.modal-body').html(text);
        dialog.modal({ show: true, backdrop: 'static' });

        dialog.on('hidden.bs.modal', function (e) {
            dialog.find('.modal-footer').remove();
            dialog.unbind();
            dialog.remove();
        });

        $('.modal-footer').on('click', function (e) {
            e.preventDefault();
            fn && fn($(e.target), dialog);
            dialog.modal('hide');
        });
        var winHeight;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight;
        }
        if( !dialog.attr("enableSwitch") )
            dialog.find('.modal-dialog').css("margin-top", (winHeight - 250) / 2 + "px");
    };
    $.showMessageBoxTitle = function (title, text, fn) {
        var dialog = $().dialog('myModal');
        var defaultButton = $("<div class=\"modal-footer\"><button type=\"button\" id=\"yes\" class=\"btn btn-primary\">确定</button></div>");

        dialog.find('.modal-title').html(title);
        if (!dialog.find('#yes') || dialog.find('#yes').length == 0)
            dialog.find('.modal-content').append(defaultButton);
        dialog.find('.modal-body').html(text);
        dialog.modal({ show: true, backdrop: 'static' });
        dialog.on('hidden.bs.modal', function (e) {
            dialog.find('.modal-footer').remove();
            dialog.unbind();
        });

        $('.modal-footer').on('click', function (e) {
            e.preventDefault();
            fn && fn($(e.target), dialog);
            dialog.modal('hide');
        });
        var winHeight;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight;
        }
        if (!dialog.attr("enableSwitch"))
            dialog.find('.modal-dialog').css("margin-top", (winHeight - 250) / 2 + "px");
    };
    $.showModal = function (url, option) {
        
        var iframes = $(".modal.fade");
        var isOpen = false;
        if (iframes) {
            for (var i = 0; i < iframes.length; i++) {
                var iframe = $(iframes[i]).find("iframe");
                if (decodeURI($(iframe).attr("src")).indexOf(decodeURI(url)) > -1) {
                    if (!$(iframes[i]).hasClass("in")) {
                        $(iframes[i]).addClass("in");
                    }
                    isOpen = true;
                }
            }
        }
        if (isOpen) return;
        if (url[0] != "/" && url.indexOf("http") != 0) url = $.baseUrl + url;
        var dialog, frame;
        var ele = $('myModal');
        var shown = ele.css('display');
        if (shown != 'block') {
            dialog = $().dialog('myModal', true);
        }
        else {
            dialog = $().dialog('myModal');
        }
        dialog.find('.modal-header').css('cursor', 'move');
        //dialog.find('.modal-content').draggable();
        if (dialog.find('.modal-dialog') && typeof (dialog.find('.modal-dialog').draggable) == "function") {
            dialog.find('.modal-dialog').draggable = true;
        }
        if (option && option.backdrop) {
            dialog.attr("enableSwitch", true);
            dialog.modal({ show: true, backdrop: '' });
            dialog.removeAttr('class');
            dialog.css({ "position": "fixed", "top": "100px", "left": "200px" });
            dialog.find('.modal-dialog').css("margin", "0px");
            var _move = false;//移动标记  
            var _x, _y;//鼠标离控件左上角的相对位置  
            dialog.click(function () {
                //alert("click");//点击（松开后触发）  
            }).mousedown(function (e) {
                _move = true;
                _x = e.pageX - parseInt(dialog.css("left"));
                _y = e.pageY - parseInt(dialog.css("top"));

            });
            $(document).mousemove(function (e) {
                if (_move) {
                    var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置  
                    var y = e.pageY - _y;
                    dialog.css({ top: y, left: x });//控件新位置  
                }
            }).mouseup(function () {
                _move = false;

            });
        }
        else {
            if (dialog.find('.modal-dialog') && typeof (dialog.find('.modal-dialog').draggable) == "function") {
                //if (url.indexOf("TemplateDesign.html") > 0) {//打印模板设计界面不允许拖动PDEVELOPER-12375
                //    dialog.find('.modal-dialog').draggable = false;
                //    dialog.find('.modal-header').css('cursor', '');//YWT-13145
                //}
                //else {
                    dialog.find('.modal-dialog').draggable = true;
                    dialog.find('.modal-dialog').draggable();
               // }
            }
            /*
            if (option && option.backdrop) {
          
            }
            else {*/
            dialog.modal({ show: true, backdrop: 'static' });
            /*
            }*/
        }

       
        var currentTab = $("#portal-tab  .active iframe");
        if (currentTab) {
            if (currentTab.attr("src") && (currentTab.attr("src").indexOf("ReportPage") > -1  || currentTab.attr("src").indexOf("Select.aspx") > -1)) {
                //控制TUFO中打印插件遮挡MENU问题
                if (currentTab.contents().find("#frmTransfer").length > 0) {
                    currentTab.contents().find("#frmTransfer").css("z-index", "0"); //隐藏TUFO控件
                }
            }
        }
        if (false && (url.indexOf('.htm') > 0)) {
            var oid = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.aspx'));
            var id = oid.charAt(0).toLowerCase() + oid.substring(1);
            var htmlLoaded = false;
            $.get(url.replace('.aspx', '.htm'), function (ret) {
                dialog.find('.modal-title').text(option.title);

                dialog.find('.modal-body').html(ret);
                htmlLoaded = true
            });
            $.get(url.replace(oid + '.aspx', 'js/' + oid + '.js'), function (ret) {
                var id = dialog.attr('id');
                var func = '(' + ret + ')($("#' + id + '"),$("#' + id + ' .modal-footer"));';
                if (htmlLoaded == true) {
                    jQuery.globalEval(func);
                }
                else {
                    var handle = windows.setTimeInterval(function () {
                        if (htmlLoaded == true) {
                            windows.clearInterval(handle);
                            $.globalEval(func);
                        }
                    }, 50);
                }
            });
        }
        else {
            frame = dialog.find('iframe');
            if (frame.length == 0) {
                dialog.find('.modal-body').append(frame = $('<iframe frameborder="0" width="100%" height="100%"></iframe>'));
            }
            var title = option.title;
            dialog.find('.modal-title').text(title);
            //var frame = $('#modalFrame');
            frame.attr('src', url);
            frame.width(option.width);
            frame.height(option.height);

            var content = dialog.find('.modal-dialog');
            content.width(Number(option.width) + 30);
            content.height(Number(option.height) + 30);
            var winHeight;
            if (window.innerHeight)
                winHeight = window.innerHeight;
            else if ((document.body) && (document.body.clientHeight))
                winHeight = document.body.clientHeight;
            //通过深入Document内部对body进行检测，获取窗口大小
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                winHeight = document.documentElement.clientHeight;
            }
            if (!dialog.attr("enableSwitch"))
                content.css("margin-top", (winHeight - Number(option.height) - 80) / 2 + "px");
            frame[0].modalDialog = dialog;
            frame[0].modalDialogArgument = option.obj;
            if (title == null) {
                frame.on("load", function (e) {
                   

                    try { title = e.target.contentWindow.document.title; } catch (ex) { }
                    dialog.find('.modal-title').text(title)
                    var f = e.target.contentWindow.onAfterOnload;//打印模板设计时使用该事件
                    if (f) {
                        f(e, dialog);
                    }
                    //YWT-10213 zlj 诡异的错误增加
                    setTimeout(function () {
                        try
                        {
                            if (!$(document.activeElement).is("iframe") && $(document.activeElement).find("iframe:visible").length > 0) {
                                var cs = $(document.activeElement).find("iframe:visible").contents();
                                if (cs.length > 0) {
                                    var oldActivateElement = cs[0].activeElement;
                                    $(document.activeElement).find("iframe:visible").focus();
                                    $(oldActivateElement).focus();
                                }

                            }
                        }
                        catch(ex){}
                    }, 200);
                 
                  
                });
            }
        }

        dialog.on('hide.bs.modal', function (e) {

            var b = frame[0].contentWindow.onbeforeunload;

            if (b) {
                b(e);
            }

        });

        dialog.on('hidden.bs.modal', function (e) {
            dialog.find('.modal-footer').children().each(function () {
                $(this).remove();
            });
            if (option.cb) {
                var ret = frame[0].contentWindow.returnValue;
                if (ret == undefined) {
                    ret = top.window.returnValue;
                }
                option.cb.call(option.ctx, ret);
            }
            if (dialogManager.length > 0) {
                var diag = dialogManager[dialogManager.length - 1];
                diag.obj.find('iframe').attr('src', 'about:blank');
                diag.obj.unbind();
                var last = 2;
                if (dialogManager.length > 1) {
                    last = dialogManager[dialogManager.length - 2];
                    diag.obj.prev('.modal-backdrop').css('z-index', last.zIndex - 11);
                }
                diag.obj.remove();
                top.window.returnValue = null;
                diag.obj = null;
                dialogManager.pop();
                dialog.remove();

            }
            if (dialogManager.length == 0) {//当最后一个对话框关闭时才显示TUFO控件
                /*
                var currentTab = $("#portal-tab  .active iframe");
                if (currentTab) {
                    if (currentTab.attr("src") && (currentTab.attr("src").indexOf("ReportPage") > -1 || currentTab.attr("src").indexOf("Select.aspx") > -1)) {
                        //控制TUFO中打印插件遮挡MENU问题
                        if (currentTab.contents().find("#frmTransfer").length > 0) {
                            currentTab.contents().find("#frmTransfer").css("z-index", "-2");//显示TUFO控件
                        }
                    }
                }
                //tplusbrowser hacker flash，by lsg， PDEVELOPER-15453 : T+浏览器 关闭单据的附件窗口后，界面显示不正确
                top.document.body.style.marginTop="1px";
                window.setTimeout(function(){top.document.body.style.marginTop="";},0);*/
            }
        });
    }


    if (typeof define === "function" && define.amd) {
        define("tp.ui.dialog", [], function () {
            return { dialog: $.dialog };
        });
    }

} (jQuery);



+ function(win) {


    //---------------------原 PowerModalDialog.js代码-------------------------

    //cbl 2009-11-10

    //***************************************************************
    //ajax相关方法
    var progids = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    var progid = null;

    var ie7xmlhttp = false;


    //if (typeof XMLHttpRequest == "object") {
    //    try { var o = new XMLHttpRequest(); ie7xmlhttp = true; } catch (e) { }
    //}


    if (window.XMLHttpRequest != null && typeof(window.XMLHttpRequest) != "undefined") {
        try {
            var o = new XMLHttpRequest();
            ie7xmlhttp = true; } catch (e) {}
    }

    if (typeof XMLHttpRequest == "undefined" || !ie7xmlhttp) {
        XMLHttpRequest = function() {
            var xmlHttp = null;
            if (progid != null) {
                return new ActiveXObject(progid);
            }
            for (var i = 0; i < progids.length && xmlHttp == null; i++) {
                try {
                    xmlHttp = new ActiveXObject(progids[i]);
                    progid = progids[i];

                } catch (e) {}
            }

            return xmlHttp;
        };
    }


    //同步ajax请求    
    function SyncAjaxRequest(sURL, strXmlData) {
        var result = false;
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open("post", sURL, false);
        //xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(strXmlData);

        if (4 == xmlHttp.readyState) {
            if (200 == xmlHttp.status) {
                var flag = xmlHttp.responseText;
                if (flag) {
                    return flag;
                } else {
                    alert("服务器繁忙，请稍候...");
                }
            }
        }

        return "";
    }

    //***************************************************************
    //记录原始的   showModalDialog
    if (win.originalModalDialog == null) {
        if (win.showModalDialog) {
            win.originalModalDialog = window.showModalDialog;
        } else {
            win.originalModalDialog = window.open;
            win.showModalDialog = window.open;
        }
    }

    function callOriginalModalDialog(sURL, vArguments, sFeatures) {
        if (sFeatures) {
            result = originalModalDialog(sURL, vArguments, sFeatures);
        } else {
            result = originalModalDialog(sURL, vArguments);
        }

        return result;
    }

    //生成xml数据
    function CreateXmlData(sNewURL, strData) {
        var xml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
        xml += "<root>"
        xml += "<url>" + sNewURL.replace("\\", "_") + "</url>"
        var paras = strData.split("&");
        if (paras) {
            var length = paras.length;
            if (length > 0) {
                xml += "<data>"
                for (var i = 0; i < length; i++) {
                    var pos = paras[i].indexOf('='); //查找name=value   
                    if (pos > 0) {
                        xml += "<row>";
                        xml += "<name>" + paras[i].substring(0, pos) + "</name>";
                        xml += "<value>" + paras[i].substring(pos + 1) + "</value>";
                        xml += "</row>"
                    }
                }
                xml += "</data>"
            }
            xml += "</root>"
        }

        return xml;
    }


    function GetBackHandleURL() {
        var url = getRootPath() + "/CommonPage/AjaxModalDialog.aspx";
        return url;
    }

    function getRootPath() {
        var strFullPath = win.location.href;
        var strPath = window.location.pathname;
        var pos = strFullPath.indexOf(strPath);
        var prePath = strFullPath.substring(0, pos);
        var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
        return (prePath + postPath);
    }


    //***************************************************************
    win.showModal = $.showModal 
    win.showModalDialog = function(url, obj, opt, fn, ctx) {

        var refPos = -1;
        refPos = url.indexOf("RefPage.aspx"); //目前参照弹出特殊处理
        if (refPos > 0) {
            //重载新的  showModalDialog 
            //如果长度小于1000,调用原始的方法
            //否则，先将数据发送到服务器

            //var BackHandleURL = "AjaxModalDialog.aspx";
            var MaxLength = 1000;

            var length = url.length;
            if (length > MaxLength) //url超长的时候
            {
                var pos = url.indexOf("?");
                if (pos >= 0) {
                    var sNewURL = url.substr(0, pos);
                    var strData = url.substr(pos + 1);
                    var powerRequestKey = win.GetPowerRequestKey(sNewURL, strData);
                    if (powerRequestKey) {
                        sNewURL += "?" + powerRequestKey;
                        url = sNewURL;
                    }
                }
            }
        }

        if (win.top && win.top.showModal) {

            var width = opt.match(/dialogWidth(:|=)(\d+)px/)[2];
            var height = opt.match(/dialogHeight(:|=)(\d+)px/)[2];
            win.top.showModal(url, { width: width, height: height, cb: function(ret) { win.focus();
                    if (fn) { fn.call(ctx, ret); } }, ctx: ctx, obj: obj });
        }
    }
    win.GetPowerRequestKey = function(filePath, search) {
        var xmlData = CreateXmlData(filePath, search);
        var backUrl = GetBackHandleURL();
        var powerRequestKey = SyncAjaxRequest(backUrl, xmlData);
        if (powerRequestKey) {
            return "powerRequestKey=" + powerRequestKey;
        }
        return "";
    }

    
}(window)


