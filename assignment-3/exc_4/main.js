
$(document).ready(function() {
   $(".circles").click(function (e) {
       console.log("nej");
       console.log(e.target);
        if ($(e.target).css("background-color") == "rgb(171, 205, 239)") {
            $(e.target).css("background-color", "black");
        }
        else {
            $(e.target).css("background-color", "rgb(171, 205, 239)");
        }
    })
  $(".squares").click(function (e) {
    $(e.target).height($(e.target).height()/2);
    $(e.target).width($(e.target).width()/2);
 })
 $(".rectangles").click(function (e) {
     console.log($(e.target).last().offset())
     $(e.target).last().offset({top: ($(e.target).last().offset().top + 10)});
 })
});

