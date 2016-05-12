$(function() {
  var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");
  draw2(ctx);
});

function draw2(ctx) {
  var colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777",
                "#888888", "#999999", "#aaaaaa", "#bbbbbb", "#cccccc", "#dddddd", "#eeeeee", "#ffffff"],
      width = 40,
      height = 40,
      row = 0,
      occurrence = 800 * 800 / width / height;

  for(var i = 0; i < occurrence; i++) {
    row = Math.floor(i / (800/width));
    ctx.fillStyle = colors[i % 16];
    ctx.fillRect((i % (800/width)) * width, row * height, width, height);  
  }
}

function draw(canvas, ctx) {
  var colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555"];
  colors.forEach(function(color, i) {
    ctx.fillStyle = color;
    ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);
  });
}