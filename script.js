/*jslint latedef:false*/
document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";
var x = parseInt(prompt("How long is the first array", "1"), 10);
var y = parseInt(prompt("How long is the second array", "1"), 10);
var array = new Array(x)
var array2 = new Array(y)
var a = array.length;
var b = array2.length;
var c = b + a;
document.write("Combined length:  " + c);
for(var i = 0; i < array.length; i++){
    array[i] = parseInt(prompt("Fill the first array", "1"), 10);
}
for(var j = 0; j < array2.length; j++){
    array2[j] = parseInt(prompt("Fill the second array ", "1"), 10);
}
document.write(" [" + array + "]");
document.write(" [" + array2 + "]");
document.write(".......Final Array ->");
var m = 0;
var k = 0;
var l = 0;
var array3 = new Array(c);
while(m<array.length && k<array2.length){
    if(array[m] < array2[k]){
        array3[l] = array[m];
        m = m + 1;
    }else{
        array3[l] = array2[k];
        k = k + 1;
    }
    l = l + 1;
}
while (m < array.length -1)
    {
        array3[l] = array[m];
        l = l + 1;
        m = m + 1;
    }

    while (k < array2.length -1)
    {
        array3[l] = array[k];
        l = l + 1;
        k = k + 1;
    }
document.write(array3);

