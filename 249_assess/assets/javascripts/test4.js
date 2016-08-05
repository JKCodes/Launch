var dont_run = true;

if (dont_run) {
  throw new Error("test4.js is prevented from running.");
}

// #41 Seeing Stars

function star(num) {
  var mid_point = Math.floor(num / 2),
      left_side = '',
      right_side = '';
  for(var i = 0; i < mid_point; i++) {
    for (var j = 0; j < i; j++) {
      left_side += ' ';
    }
    for (var k = 0; k < mid_point - i - 1; k++) {
      right_side += ' ';
    } 
    console.log(left_side + '*' + right_side + '*' + right_side + '*' + left_side);
    left_side = '';
    right_side = '';
  }
  for (var i = 0; i < num; i++) {
    left_side += "*";
  }
  console.log(left_side);
  left_side = '';

  for(var i = mid_point - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      left_side += ' ';
    }
    for (var k = 0; k < mid_point - i - 1; k++) {
      right_side += ' ';
    } 
    console.log(left_side + '*' + right_side + '*' + right_side + '*' + left_side);
    left_side = '';
    right_side = '';
  }

}

console.log("<----- Number 41 answers start here ----->");
star(7);
star(9);
console.log("<----- Number 41 answers end here ----->\n\n");

// #42 Transpose 3x3

function transpose() {
  var matrix = [[1,5,8],[4,7,2],[3,9,6]],
      flatten = [].concat.apply([], matrix);
      new_matrix = [];

  for (var i = 0; i < 3; i++) {
    new_matrix.push([flatten[i], flatten[i + 3], flatten[i + 6]]);
  }
  return new_matrix;
}

console.log("<----- Number 42 answers start here ----->");
console.log(JSON.stringify(transpose()));
console.log("<----- Number 42 answers end here ----->\n\n");

// #43 Transpose MxN

function transposer(arr) {
  var rows = arr.length,
      flatten = [].concat.apply([], arr),
      cols = flatten.length / rows,
      temp = [],
      new_matrix = [];

  for(var i = 0; i < cols; i++) {
    for(var j = 0; j < rows; j++) {
      temp.push(flatten[i + j * cols]);
    }
    new_matrix.push(temp);
    temp = [];
  }

  return new_matrix;
}

console.log("<----- Number 43 answers start here ----->");
console.log(JSON.stringify(transposer([[1, 2, 3, 4]])));       // [[1], [2], [3], [4]]
console.log(JSON.stringify(transposer([[1], [2], [3], [4]]))); // [[1, 2, 3, 4]]
console.log(JSON.stringify(transposer([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]))); 
                                              //  [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
console.log(JSON.stringify(transposer([[1]])));                // [[1]]
console.log("<----- Number 43 answers end here ----->\n\n");

// #44 Merge Sorted List

function merge(arr1, arr2) {
  var length1 = arr1.length,
      length2 = arr2.length,
      i1 = 0,
      i2 = 0,
      flag = true,
      finished,
      return_arr = [];

  if (length1 === 0 || length2 === 0) {
    return [].concat.call([], arr1, arr2);
  }

  while (flag) {
    if (arr1[i1] > arr2[i2]) {
      return_arr.push(arr2[i2]);
      i2++;
    }
    else {
      return_arr.push(arr1[i1]);
      i1++;
    }
    if (i1 === length1) {
      flag = false;
      finished = 'i1'; 
    }
    if (i2 === length2) {
      flag = false;
      finished = 'i2';
    }
  }
  if (finished === 'i1') {
    for (var i = i2; i < length2; i++) {
      return_arr.push(arr2[i]);
    }
  }
  else {
    for (var i = i1; i < length1; i++) {
      return_arr.push(arr1[i]);
    }

  }

  return return_arr;
}

console.log("<----- Number 44 answers start here ----->");
console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));    // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));        // [1, 4, 5]
console.log(merge([1, 4, 5], []));        // [1, 4, 5]
console.log("<----- Number 44 answers end here ----->\n\n");
