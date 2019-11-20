
$(document).ready(function() {
$(".pWrap").append("<p>kaka</p>");
$("textarea").on("keyup", function()  {
    $("p:last").text($(this).val())
});

$(".change_Style").click(function(){
    console.log($("body > div.tools > select").val());
    $("p:last").css("font-style",$('body > div.tools > select').val());
    });
$(".new_paragraph").click(function(){
    $(".pWrap").append("<p>kaka</p>");
    });

});




/*
var setOption = function(list_Option){
for(let i = 0; i < list_Option +1 ; i++) {
    $(".drop_list").append("<option value="+list_Option+ ">"+i+"</option>")
    }
} 
*/

var removeSquare = () => 
{
    $(".square").each(function() 
    {
    $(this).remove();
    });
};
/*
var showSquare = (squareVal) => {

    for(var i=0; i < squareVal; i++) {
        $(".square-wrap").append("<div class = 'square'></div>")
    }

}

*/
