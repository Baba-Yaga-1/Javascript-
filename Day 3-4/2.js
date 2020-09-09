// Question 2.Create a webpage containing two input fields and a button.
//             A. Write something in the first input
//             B. On click of the button, the content of input one should be copied in the second input

function copy() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    n2.value = n1.value;
}

