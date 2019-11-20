$(document).ready(function() {
    $("body").append("<div class=blueCircle></div>");
    $(".blueCircle").on( "mouseover", function() {
    
        toggleOpacity($(this));
        console.log("kaka");
        
    });
    $(".blueCircle").on("mouseout",function() {
        toggleOpacity($(this));
        console.log("kaka2");
    });
    });
    
    var toggleOpacity = function(element) {
        element.toggleClass("opacity");
    }