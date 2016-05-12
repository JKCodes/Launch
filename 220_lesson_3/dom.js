document.getElementById("primary_heading").setAttribute("class", "heading");

document.getElementById("list").setAttribute("class", "bulleted");

document.getElementById("toggle").onclick = function(e) {
  e.preventDefault();
  var notice = document.getElementById("notice");
  if (notice.getAttribute("class") === "hidden") {
    notice.setAttribute("class", "visible");
  }
  else {
    notice.setAttribute("class", "hidden");
  }
};

document.getElementById("notice").onclick = function() {
  this.setAttribute("class", "hidden");
}

document.getElementById("multiplication").innerText = 13 * 9;

document.body.setAttribute("id", "styled");