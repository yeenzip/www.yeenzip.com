window.onload = function () {
  var codeBlock=$('.hljs').parent('pre');
  var barHtml = '<div id="codeBar"><div class="code-toggler md-code-btn">折叠</div><div class="code-copier md-code-btn">复制</div></div>';
  codeBlock.prepend(barHtml);
  $('pre').on('click', '.code-toggler', function () {
      "折叠" == $(this).text() ? $(this).text("展开") : $(this).text("折叠"),
      $(this).siblings(".code-copier").toggle(),
      $(this).parent().siblings("code, ol").toggle()
  });
  var code_cp = new Clipboard('.code-copier', {
      text: function (trigger) {
          return $(trigger).parent().nextAll("code").text();
      }
  });
}