/*jslint latedef:false*/
document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";
var x = parseInt(prompt("How long is the first array", "1"), 10);
var y = parseInt(prompt("How long is the second array", "1"), 10);
var array = new Array(x)
var array2 = new Array(y)
var a = array.length;
var b = array2.length;
var c = b + a;
document.write("The length of the first array is " + a + "  ");
document.write(" The length of the second array is " + b + "    ");
for(var i = 0; i < array.length; i++){
    array[i] = parseInt(prompt("Fill the first array", "1"), 10);
}
for(var j = 0; j < array2.length; j++){
    array2[j] = parseInt(prompt("Fill the second array ", "1"), 10);
}
document.write(array);
document.write("," + array2);
/*var c= [];
var next;
while(a.length && b.length){
        while(array[0]<=array2[0]) c.push(array2.shift());
        while(array[0]<=array2[0]) c.push(array.shift());
    }
    if(a.length) c.push(array);
    else c.push(array2);
    return c;
}*/
