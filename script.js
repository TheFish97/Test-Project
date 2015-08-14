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
var i1 = 0;
var i2 = 0;
var l = 0;
var array3 = new Array(c);
	if(i1 >= a && i2 >= b){
		array3[l] = 0;
	}
	else if (i1 >= a || array[i1] < array2[i2]){
		array3[l] = array2[i2];
		l++;
		i2++;
	}	
	else if (i2 >= b || array[i1] >= array2[i2]){
		array3[l] = array[i1];
		l++;
		i1++;
	}
}
document.write(array3);

