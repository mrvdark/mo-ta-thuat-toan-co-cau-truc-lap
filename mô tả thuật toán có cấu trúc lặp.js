var arr = [3, 4, 12, 1, 0, 5];
var max = arr[0];
for (var k = 1; k < arr.length; k++) {
    if (arr[k] > max) {
        max = arr[k];
    }
}
console.log("Max is: " + max);