//Eloquent Javascript chapter 3 exercises

//1. Minimum
var min = function(a,b){
 if (a < b) {
   return a;
 } else {
   return b;
 }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//2. Recursion
var isEven = function(N){
  if (N === 1) {
    return false;
  } else if (N === 0) {
    return true;
  } else {
      if (N > 0) {
      return isEven(N - 2);
      } else {
        return isEven (N + 2);
      };
  }
  
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3. Bean Counting
//intial countBs
//var countBs = function (string) { 
//  var count = 0;
//  for (var i = 0; i < string.length; i++) {
//    if (string.charAt (i) === "B") {
//      count++;
//    }
//  }
//  return count;
//}

//new countBs
var countBs = function (string) {
  return countChar (string, "B");
};

//countChar
var countChar = function (string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt (i) === char) {
      count++
    }
  }
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
