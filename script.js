/*jslint latedef:false*/
document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";
var x = parseInt(prompt("What is the length of the first array", "1"), 10);
var y = parseInt(prompt("What is the length of the second array", "1"), 10);
var array = new Array(x)
var array2 = new Array(y)
var a = array.length;
var b = array2.length;
var c = b + a;
document.write("Combined length:  " + c);
for(var i = 0; i < array.length; i++){
    array[i] = parseInt(prompt("What is the value at index " + i + " of the first array", "1"), 10);
}
for(var j = 0; j < array2.length; j++){
    array2[j] = parseInt(prompt("What is the value at index " + j + " of the second array", "1"), 10);
}
document.write(" [" + array + "]");
document.write(" [" + array2 + "]");
document.write(".......Final Array ->");
var m = 0;
var k = 0;
var l = 0;
var array3 = new Array(c);
while(m<array.length || k<array2.length){
    if(array[m] < array2[k]){
        array3[l] = array[m];
        m = m + 1;
    }else{
        array3[l] = array2[k];
        k = k + 1;
    }
    l = l + 1;
}
document.write("[" + array3 + "]");

