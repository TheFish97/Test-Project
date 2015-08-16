document.getElementById("foot01").innerHTML = "<p>&copy;  " + new Date().getFullYear() + "  All rights reserved </p>";

// Gather input
function parseArrayInput(text) {

    var parts = text.split(',');

    var array = new Array(parts.length);

    for (var i = 0; i < parts.length; i++) {
        array[i] = Number(parts[i]);
    }

    return array;
}

function runSort() {

    var array = parseArrayInput(document.getElementById("array1").value);
    var array2 = parseArrayInput(document.getElementById("array2").value);

    // Algorithm
    var array3 = new Array(array.length + array2.length);

    var m = 0;
    var k = 0;
    var l = 0;
    while (m < array.length && k < array2.length) {
        if (array[m] < array2[k]) {
            array3[l] = array[m];
            m = m + 1;
        } else {
            array3[l] = array2[k];
            k = k + 1;
        }
        l = l + 1;
    }

    // G: You don't need the extra if conditions as the while test takes care of each array's extras
    while (m < array.length) {
        array3[l] = array[m];
        l = l + 1;
        m = m + 1;
    }

    while (k < array2.length) {
        // G: This had a bug where it was indexing into array rather than array2
        array3[l] = array2[k];
        l = l + 1;
        k = k + 1;
    }

    // G: Rather than use d.ocument.write(), I set the innherHTML of an element by ID
    // Write out the result
    var resultMessage = "[" + array3 + "]";

    document.getElementById("results").innerHTML = resultMessage;

}
