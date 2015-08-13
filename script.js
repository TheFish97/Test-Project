@@ -0,0 +1,29 @@

/*jslint latedef:false*/
document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";
var x = parseInt(prompt("How long is the first array", "1"), 10)
var y = parseInt(prompt("How long is the second array", "1"), 10)
var array = new Array(x)
var array2 = new Array(y)
var array3 = new Array(x+y)
var a = array.length
var b = array2.length
document.write("The length of the first array is " + a )
document.write(" The length of the second array is " + b)
for(var i = 0; i < a; i++){
    array[i] = parseInt(prompt("Enter a number", "1"), 10)
}
for(var j = 0; i < b; i++){
    array[j] = parseInt(prompt("Enter a number", "1"), 10)
}
var z = 0
var q = 0
var l = 0
while(z < a-1 && q < b-1){
    if(array[z]<array2[q]){
        array3[l] = array[z]
    }
    else{
        array3[l] = array2[q]
    }
}
document.write("                     " + array3)
