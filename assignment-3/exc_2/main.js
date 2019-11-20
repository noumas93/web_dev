$(document).ready(function() {
    $("body").append("<h1>How many boxes do you want to show?</h1>");
    $("body").append("<select></select>");
    for (i=0;i<17;i++) {
        $("select").append("<option id="+i+">"+i+"</option>");
        };
    $("body").append("<div class=wrapper></div>");
    $("select").change(function() {
        removeSquares();
        toggleSquares($("select").val());
    });
});
var removeSquares = function() {
    $(".square").each(function() {
        $(this).remove();
    });
}
var toggleSquares = function(squareVal) {
    for (i=0; i < squareVal ;i++) {
        $(".wrapper").append("<div id="+i+" class=square></div>"); 
        console.log("index: "+ i + " valdNr: " + squareVal);
    }
};