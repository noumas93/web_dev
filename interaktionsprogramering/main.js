$(document).ready(function () {
    var selectedPart = "";
    
    /*$('.image').zoom({url: "img/shoeModel1.svg",
        callback: function(){
            $(this).colorbox({href: this.src});
        }
    });*/
 

 //$('#model-1').zoom();


    $('.image').mouseover(function () {
        $(this).stop().animate({ 'zoom': 1.2 }, 400);
    });
    $('.image').mouseout(function () {
        $(this).stop().animate({ 'zoom': 1 }, 400);
    });

 
    $(".model").click(function () {
        document.getElementById("priceDisplay").classList.remove("d-none");
        document.getElementById("priceDisplay").classList.add("d-flex");
        let btnIds = ["btnmodel1", "btnmodel2", "btnmodel3"];
        $('#model-btn').remove();
        let clickedId = $(this).attr('id');
        if ($(this).attr("aria-expanded") === "true") {
            document.getElementById("priceDisplay").classList.remove("d-flex");
            document.getElementById("priceDisplay").classList.add("d-none");
            jQuery("#modelHeader").css("visibility", "hidden")
            jQuery("#footer").css("visibility", "hidden")
            for (i in btnIds) {
                if (btnIds[i] != clickedId) {
                    document.getElementById(btnIds[i]).classList.remove("d-none");
                    document.getElementById(this.dataset.model).style.display = "none";
                    document.getElementById("welcomePhrase").style.display = "flex ";
                }
            }

        } else {
            console.log("här ska det visas rätt skomodel");
            document.getElementById(this.dataset.model).style.display = "block";
            document.getElementById("welcomePhrase").style.display = "none";
           
            for (i in btnIds) {
                if (btnIds[i] != clickedId) {
                    document.getElementById(btnIds[i]).classList.add("d-none");
                }

            }
            // change price depends on model
            document.getElementById("priceDisplay").innerHTML = this.value;
            // change model name
            document.getElementById("modelHeader").innerHTML = this.innerHTML;
            jQuery("#footer").css("visibility", "visible")
            jQuery("#modelHeader").css("visibility", "visible")

        }




    });

    $(".shoePart").mouseup(function () {
        $(".shoePart").removeClass("acitve2");
        $(this).addClass("acitve2");
        console.log(document.getElementById(this.dataset.shoepart));
        selectedPart = document.getElementById(this.dataset.shoepart);
        showShoepartSelection(selectedPart);
        //changeColor(selectedPart, "blue");

        // zooming img
    });


    $(".color-btn").click(function () {
        changeColor(selectedPart, this.dataset.color);




    });

    function changeColor(selectedPart, color) {
        selectedPart.style.fill = color;
    }



    function showShoepartSelection(selectedShoepartObj) {
        console.log("här ändras färg");
        let prevPartColor = "";
        console.log("före", prevPartColor);
        prevPartColor = selectedShoepartObj.style.fill;
        console.log("efter", prevPartColor);
        selectedShoepartObj.style.fill = "purple";
        setTimeout(function () {
            //console.log("senare",prevPartColor);
            selectedShoepartObj.style.fill = prevPartColor;
        }, 300)
       //prevPartColor = "";
    }
});



//var model1 = shoeModel1.svg;