var largestProduct = new Worker("/javascripts/largest_product.js");

$(function() {
  var $form = $("form"),
      $answer = $("strong");

  $form.on("submit", function(e) {
    e.preventDefault();
    var numeric_string = $form.find("#numeric_string").val().replace(/\s/gm, "");

    largestProduct.postMessage([numeric_string, +$form.find("#adjacent_count").val()]);
  });

  largestProduct.addEventListener("message", function(message) {
    $answer.text(message.data);
  });
});