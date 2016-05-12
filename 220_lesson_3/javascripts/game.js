$(function() {
  var answer = Math.floor(Math.random() * 4294967296) + 1;
  answer = 4294967296;
  var attempts = 0;
  $("form").on("submit", function(e) {
    e.preventDefault();

    var guess = +$("#guess").val();
    var message;
    attempts++;
    if (guess === answer) {

    }

    if (guess > answer) {
      message = "Attempt #" + attempts + ". The number is lower than " + guess;
    }
    else if (guess < answer) {
      message = "Attempt #" + attempts + ". The number is greater than " + guess;
    }
    else if (guess === answer) {
      message = "Correct! " + "You took " + attempts + " attempt(s) to guess " + guess;
      attempts -= 1;
    }
    else {
      attempts +=4;
      message = "Invalid input.  Attempt penalty: 5.  New attempts: " + attempts;
    }
    $("p").text(message);
    $("input[type='text']").val("");
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    attempts = 0;
    answer = Math.floor(Math.random() * 4294967296) + 1;
    $("p").text("Guess a number from 1 to 4294967296");
  });
});
