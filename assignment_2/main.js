var imageSrc = document.querySelector('.imwrap img');
var thumbSelected = document.querySelector('.boxes img'); 
var thumbFocus = (opacity) => {
    thumbSelected = document.querySelector(`img[data-index="${current}"]`);
    thumbSelected.style.background = `rgba(255, 255 , 255 , ${opacity})`;
}
var current = 1;
thumbFocus(1);
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
    thumbFocus(0);
    current--;
    setCurrent();
    thumbFocus(1);

    console.log(thumbSelected);
    description();
    console.log(current);
    imageSrc.src = "images/image"+current+".jpg"
    console.log(current);
}

var rightArrow = document.querySelector('.rArrow');
rightArrow.onmouseup = function() {
    thumbFocus(0);
    current++;
    setCurrent();
    thumbFocus(1);
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

var box = document.querySelectorAll(".boxes img");
box.forEach(function(thumb) { 
    thumb.onclick = e =>  {
    var target = e.target;
    imageSrc.src =  "images/image"+e.target.dataset.index+".jpg";
    thumbFocus(0);
    current = e.target.dataset.index;
    thumbFocus(1);
    description();
    }
});

