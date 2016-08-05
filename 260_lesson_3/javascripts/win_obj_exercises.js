/*
window.location.reload();
window.location = "http://www.google.com";
window.history.back() || window.history.get(-1)
window.location.search.replace(/^.+%3A/, ""); || window.location.search.match(/%3A(.+)$/)[1];
var unused_dimensions = {
  width: window.screen.width - document.body.clientWidth,
  height: window.screen.height - document.body.clientHeight
};
window.scrollTo(0, document.body.scrollHeight);
(function() {
  var duration = 500,
      framerate = 8,
      browser_height = document.body.clientHeight,
      height = document.body.scrollHeight,
      distance_per_call = height / (duration / framerate);

  var scrollPage = function() {
    window.scrollTo(0, window.scrollY + distance_per_call);
    if (window.scrollY + browser_height < height) {
      setTimeout(scrollPage, framerate);
    }
  };
  scrollPage();
})();
var params_string = "?";

for (var property in params) {
  params_string += property + "=" + window.encodeURIComponent(params[property]) + "&";
}

params_string = params_string.replace(/&$/, "");
*/