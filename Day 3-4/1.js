
// Question 1.Create a webpage containing an image and three buttons
//             A. On click of the second button a change the existing image to a new image
//             B. On click of the third button change it once again
//             C. On click of first, the first image should come back


function sameImage() {
    const element = document.getElementById("img");
    const same = "Captain.jpg";
element.src = same;
}

function changeImage() {
    const element = document.getElementById("img");
    const new1 = "thor.jpg";
element.src = new1;
}

function changeagainImage() {
    const element = document.getElementById("img");
    const new2 = "ironman.jpg";
element.src = new2;
}