function oddElementsOf(arr) {
  var odd_elements = [];

  for (var i = 1, length = arr.length; i < length; i += 2) {
    odd_elements.push(arr[i]);
  }

  return odd_elements;
}

function combinedArray(arr_even, arr_odd) {
  var combined = [];

  for (var i = 0, len = even.length; i < len; i++) {
    combined.push(arr_even[i]);
    combined.push(arr_odd[i]);
  }

  return combined;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

function joinArray(arr, join) {
  return arr.join(join || "");
}

function sortDescending(arr) {
  return arr.sort(function(a, b) { return b - a; });
}

function matrixSums(arr) {
  var sums = [],
      current_sum;

  for (var i = 0, outer_len = arr.length; i < outer_len; i++) {
    current_sum = 0;
    for (var j = 0, inner_len = arr[i].length; j < inner_len; j++) {
      current_sum += arr[i][j];
    }
    sums.push(current_sum);
  }

  return sums;
}

function uniqueElements(arr) {
  var unique = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique;
}
