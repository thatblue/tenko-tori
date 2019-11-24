function countString() {
    // TODO span.hiddenの要素を除去する必要がある
    const stringCount = $('.layout-editor__preview').text().replace(/\n/g, "").length;
    window.alert(stringCount + '文字');
}

$(function () {
    $('body').append("<script>function countString(){const stringCount = $('.layout-editor__preview').text().replace(/\\n/g, '').length;window.alert(stringCount + '文字');}</script>");
    $('.editor-toolbar').append('<ul class="editor-toolbar__list"><li class="editor-toolbar__item"><a onclick="countString();">Count</a></li></ul>');
});
