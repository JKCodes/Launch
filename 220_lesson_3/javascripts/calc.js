$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

    var number1 = +$("#num1").val(),
        number2 = +$("#num2").val(),
        selection = $("select").val();

    if (selection === "add") { $("p").text(number1 + number2); }
    if (selection === "subtract") { $("p").text(number1 - number2); }
    if (selection === "multiply") { $("p").text(number1 * number2); }
    if (selection === "divide") { $("p").text(number1 / number2); } 
  });
});