$(function () {
    $('body').append("<script>function countString(){const stringCount = $('.layout-editor__preview').text().replace(/\\n/g, '').length;window.alert(stringCount + '文字あります');}</script>");
    $('.editor-toolbar').append('<ul class="editor-toolbar__list"><li class="editor-toolbar__item"><a onclick="countString();">Count(&#092;( ⁰⊖⁰)/)</a></li></ul>');
});
