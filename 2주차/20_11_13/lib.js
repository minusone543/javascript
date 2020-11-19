

function over2(obj) {
    obj.src="./images/pen02.jpg";
}
function out2(obj) {
    obj.src="./images/pen03.jpg";
}

var img4 = document.getElementById("img4");

img4.addEventListener("mouseover", function(){
    img4.src = "./images/pen02.jpg"
});
img4.addEventListener("mouseout", function(){
    img4.src = "./images/pen03.jpg"
});

// img4.addEventListener("mouseover", function(){});
// img4.addEventListener("mouseout", function(){});

// function over3() {
//     img4.src="./images/pen02.jpg";
// }
// function out3() {
//     img4.src="./images/pen03.jpg";
// }