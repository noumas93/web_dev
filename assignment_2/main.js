var imageSrc = document.querySelector('.imwrap img');
var current = 1;
var setCurrent = function() {

    if (current  < 1 ) {
        current = 8; 
        }
        if (current  > 8 ) {
            current = 1;
            }
}
var leftArrow = document.querySelector('.lArrow');
leftArrow.onmouseup = function() {
    current--;
    setCurrent();
    description();
    console.log(current);
    imageSrc.src = "images/image"+current+".jpg"
    console.log(current);
}

var rightArrow = document.querySelector('.rArrow');
rightArrow.onmouseup = function() {
    current++;
    setCurrent();
    description();
    imageSrc.src = imageSrc.src = "images/image"+current+".jpg"
    console.log(current);
}

var description = function () {
var desc = ["Smart bok cat!", "Very think, much wow", "sneak cat", "Handsome cat", "sleep cat", "hungry cat", "X-mas cat", "Angry cat"];

var imgDesc = document.querySelector("p");
imgDesc.innerText = desc[current-1];
console.log(desc[current-1]);
}
