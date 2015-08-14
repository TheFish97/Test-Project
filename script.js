/*jslint latedef:false*/
/*document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";*/
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
document.write(" [ " + array);
document.write("," + array2 + " ]");
document.write(".......Final Array ->")
var m = 0;
var k = 0;
var l = m + k;
var array3 = new Array(c)
while((m<a) && (k<b)){
    if(array[m] < array2[k]){
        array3[l] = array[m];
        m++;
        l++;
    }else{
        array3[l] = array2[k];
        k++;
        l++;
    }
}
while(k<b){
        array[l] = array2[k];
        k++;
        l++;
    }
while(m<a){
    array[l] = array[m];
    m++;
    l++;
    }
}
document.write(array3);
