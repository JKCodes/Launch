var today = new Date();

function dateSuffix(date) {
  var suffix = "th";
  var date_string = date.toString();
  var digit;

  if (date_string.length === 1 ) { digit = date_string[0]; }
  else if (date_string[0] !== "1") { digit = date_string[1]; } 

  if (digit === "1") { suffix = "st"; }
  else if (digit === "2") { suffix = "nd"; }
  else if (digit === "3") { suffix = "rd"; }

  return date + suffix;
}

function formattedDate(date) {
  var day = formattedDay(date),
      month = formattedMonth(date);

  console.log("Today's date is " + day + ", " + month + " " + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days_of_week[date.getDay()];
}

function formatTime(date) {
  return addZero(date.getHours()) + ":" + addZero(date.getMinutes());
}

function addZero(val) {
  return String(val).length < 2 ? "0" + val : val;
}

console.log(formatTime(today));

formattedDate(today);

console.log(today.getFullYear());

console.log(today.getTime());

var tomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

var next_week = new Date(today);

console.log(today == next_week);

console.log(today.toDateString() == next_week.toDateString());

next_week.setDate(today.getDate() + 7);

console.log(today.toDateString() == next_week.toDateString());