var Q = require("q");
var $ = require('jquery');

function replaceSymbol(html){
    var bs = false;
    var symbols=[
        [/([a-zA-Z]|[\d]|)\,/g, function(mh) {
            if(mh.length == 1) {
                return '，';
            }
            return mh;
        }],
        [/\,([a-zA-Z]|[\d]|)/g, function(mh) {
            if(mh.length == 1) {
                return '，';
            }
            return mh;
        }],
        [/([a-zA-Z]|[\d]|)\./g, function(mh) {
            if(mh.length == 1) {
                return '。';
            }
            return mh;
        }],
        // [/\.([a-zA-Z]|[\d]|)/g, function(mh) {
        //     if(mh.length == 1) {
        //         return '。';
        //     }
        //     return mh;
        // }],
        [/!/g, '！'],
        [/\?/g, '？'],
        [/'/g, function() {
            bs = !bs;
            if(bs) {
                return '‘';
            };
            return '’';
        }],
        [/"/g, function() {
            bs = !bs;
            if(bs) {
                return '“';
            };
            return '”';
        }],
        [/:/g, '：'],
        [/;/g, '；'],
        [/。。。。。。/g,'……'],
        [/０/g, '0'],
        [/１/g, '1'],
        [/２/g, '2'],
        [/３/g, '3'],
        [/４/g, '4'],
        [/５/g, '5'],
        [/６/g, '6'],
        [/７/g, '7'],
        [/８/g, '8'],
        [/９/g, '9'],
    ];
    for(var i=0,len=symbols.length;i<len;i++){
        var item=symbols[i];
        bs = false;
        html=html.replace(item[0], item[1]);
    }

    return html;
}
function replaceSpace(html){
    var symbols=[
        [/\s([a-zA-Z]|)/g, function (mh) {if (mh.length == 1) {return ''}return mh}],
        [/&nbsp;([a-zA-Z]|)/g, function (mh) {if (mh.length == 1) {return ''}return mh}]
    ];
    for(var i=0,len=symbols.length;i<len;i++){
        var item=symbols[i];
        html=html.replace(item[0], item[1]);
    }
    return html;
}
function replaceCorrect(html){
    var symbols=[
        [/[“”]/g, '"'],
        [/[‘’]/g, "'"],
    ];
    for(var i=0,len=symbols.length;i<len;i++){
        var item=symbols[i];
        html=html.replace(item[0], item[1]);
    }
    return html;
}
function clearStyle(html) {
    var $div = $('<div>').html(html);
    $div.find('*').removeAttr('style').removeAttr('class').removeAttr('id');
    return $div.html();
}
function clearAnnotation(html) {
    var reg = /<\!--.*-->/g;
    return (html || "").replace(reg, '');
}
function clearBR(html) {
    var $div = $('<div>').html(html);
    $div.find('br').remove();
    return $div.html();
}
function imgStyle(html) {
    var $div = $('<div>').html(html);
    $div.find('img').removeAttr('style');
    return $div.html();
}
function clearWordSpace(html) {
    var _this = this;
    var $div = $('<div>').html(html);
    var textNodes = $div.find('*').contents().filter(function(){
        return this.nodeType == 3;
    });
    textNodes.each(function(){
        $(this).replaceWith(_this.replaceSpace($(this).text()));
    });
    return $div.html();
}
function canvSmy(html) {
    var _this = this;
    var $div = $('<div>').html(html);
    var textNodes = $div.find('*').contents().filter(function(){
        return this.nodeType == 3;
    });
    textNodes.each(function(){
        $(this).replaceWith(_this.replaceSymbol($(this).text()));
    });
    return $div.html();
}
function correct(html) {
    var _this = this;
    var $div = $('<div>').html(html);
    var textNodes = $div.find('*').contents().filter(function(){
        return this.nodeType == 3;
    });
    textNodes.each(function(){
        $(this).replaceWith(_this.replaceCorrect($(this).text()));
    });
    return $div.html();  
}
function removeAllEmptyLine(html) {
    var $div = $('<div>').html(html);
    $div.find('br').remove();
    $div.find('p').each(function(){
        if(!$(this).html().trim() || $(this).html().trim() == '&nbsp;'){
            $(this).remove();
        }
    });
    return $div.html();
}
function removeTable(html) {
    var _this = this;
    var $div = $('<div>').html(html);
    for(var i=1;i<7;i++){
        $div.find('h'+i).each(function(){
            $(this).replaceWith('<strong>'+_this.replaceSpace($(this).html())+'</strong>');
        });
    }
    $div.find('blockquote').each(function(){
        $(this).replaceWith(_this.replaceSpace($(this).html()));
    });
    $div.find('i').each(function(){
        $(this).replaceWith(_this.replaceSpace($(this).html()));
    });
    $div.find('em').each(function(){
        $(this).replaceWith(_this.replaceSpace($(this).html()));
    });
    $div.find('a').each(function(){
        $(this).replaceWith(_this.replaceSpace($(this).html()));
    });
    $div.find('img').each(function(){
        var $this = $(this);
        let $tab = $this.parents('table').eq(0);
        if ($tab[0]) {
            $tab.before($this);
        }
        if($this.parent()[0].tagName != 'P'){
            $this.wrap("<p></p>");
        }
    });
    $div.find('table').remove();
    return $div.html();
}
function addText(html) {
    var $div = $('<div>').html(html.replace(/<p>（以上图片均来自网络）<\/p>/g, ''));
    $div.append('<p>（以上图片均来自网络）</p>');
    return $div.html();
}
function vocabulary(html, res) {
    html = html.replace(res, function(mh){
        return '<span class="active">'+mh+'</span>'
    });
    return html;
}
function term(html, res) {
    var $div = $('<div>').html(html);
    var textNodes = $div.find('*').contents().filter(function(){
        return this.nodeType == 3;
    });
    textNodes.each(function(){
        var _this = this;
        res.forEach( function(el, n) {
            if($(_this).text().search(el) != -1){
                $(_this).replaceWith($(_this).text().replace(el, ''));
            }
        });
    });
    return $div.html();
}

function clearIllegalityTags(html) {
    let illegalityTags = ['script', 'input', 'iframe', 'link', 'object', 'style', 'select', 'embed', 'video', 'audio'];
    var $div = $('<div>').html(html);
    $div.find(illegalityTags.join(',')).remove();
    return $div.html();
}

function keyExecution(html) {
    var _this = this;
    var thisHtml = html;
    thisHtml = _this.addText(thisHtml);

    return Q.resolve().then(() => {
        thisHtml = _this.clearAnnotation(thisHtml);// 删除注释
    }).then(() => {
        thisHtml = _this.clearTag(thisHtml);// 删除script标签等
    }).delay(10).then(() => {
        thisHtml = _this.clearStyle(thisHtml);// 删除id,class
    }).delay(10).then(() => {
        thisHtml = _this.removeTable(thisHtml);    
    }).delay(10).then(() => {
        thisHtml = _this.clearBR(thisHtml);// 删除换行
    }).delay(10).then(() => {
        thisHtml = _this.canvSmy(thisHtml);    // 转换英文字符为相应中文字符
    }).delay(10).then(() => {
        thisHtml = _this.clearWordSpace(thisHtml);// 清除字符结点的空格
    }).delay(10).then(() => {
        thisHtml = _this.removeAllEmptyLine(thisHtml);// 删除空行
        return thisHtml;
    });
}
module.exports = {
    replaceSpace: replaceSpace,
    replaceSymbol: replaceSymbol,
    replaceCorrect: replaceCorrect,
    clearStyle: clearStyle,
    clearBR: clearBR,
    imgStyle: imgStyle,
    clearWordSpace: clearWordSpace,
    canvSmy: canvSmy,
    correct: correct,
    removeAllEmptyLine: removeAllEmptyLine,
    removeTable: removeTable,
    addText: addText,
    vocabulary: vocabulary,
    keyExecution: keyExecution,
    term: term,
    clearAnnotation: clearAnnotation,
    clearTag: clearIllegalityTags
};