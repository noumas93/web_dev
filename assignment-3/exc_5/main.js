$(document).ready(function() {

$("div.dropdown").mouseover(function () {
$(this).stop().animate({
    height: "+=100"
});
});
$("div.dropdown").mouseout(function () {
    console.log("kkaaaa");
    
    $(this).stop().animate({
        height: "50"
    });

});
});

