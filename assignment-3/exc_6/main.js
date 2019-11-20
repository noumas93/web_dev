$(document).ready(function () {
    var activeButton = 0;
    $("button").click(function () {
        $("button").each(function() {
            $(this).animate({
                'borderWidth': '0'
            }, 500)
        });
        $(this).css('border', '0 solid blue').animate({
            'borderWidth': '4px'
        }, 500)
        $(".square").each(function() {
            $(this).animate({
                height: 50,
                width: 50
            });
        });
        activeButton = $(this).val();
        $("#sqr"+activeButton).animate({
            height: 100,
            width: 100
        });
        var ori = $("#sqr"+activeButton).css('opacity');
        $("#myRange").val(ori*100);
        
        
        console.log("square opacity",ori);
        
        console.log($("#myRange").val()/100);
    });
    
    $("#myRange").on("input",function() {
        var slideOpacity = $("#myRange").val()/100;
        $("#sqr"+activeButton).css(
            "opacity", slideOpacity
        );
        console.log("slide opacity",slideOpacity);
    })

});