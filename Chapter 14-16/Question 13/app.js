var arr = [];
var element1 = prompt('Enter a first element ');
arr.push(element1);
var element2 = prompt('Enter a second element ');
arr.push(element2);
var element3 = prompt('Enter a third element ');
arr.push(element3);
var element4 = prompt('Enter a fourth element ');
arr.push(element4);
document.write('Devices:' + '<br>' + arr + '<br>');
document.write('<br><br>' + 'Out:' + '<br>' + element1 + '<br>');
arr.shift();
document.write(arr);
document.write('<br>' + 'Out:' + '<br>' + element2 + '<br>');
arr.shift();
document.write(arr);
document.write('<br>' + 'Out:' + '<br>' + element3 + '<br>');
arr.shift();
document.write(arr);
document.write('<br>' + 'Out:' + '<br>' + element4 + '<br>');
arr.shift();
document.write(arr);