$("document").ready(function () {


  $("#myTable").tablesorter();
  $(".draggable").draggable({
    helper: "clone",
    revert: true,
    revertDuration: 200
  });

  $(".img-box").droppable({
    accept: "img",
    drop: function (event, ui) {
      var backImg = ui.draggable.attr('src');

      var activeImg = $(this).css("background-image", "url(" + backImg + ")");

      console.log("ui " +backImg);
      compareImg(backImg);
      // ui är objektet "bilden" som dras
      
      //event.target är div som objektet släpps i
    
      //let backImg = ui.draggable.attr('src');
      $(this).css("background-image", "url(" + backImg + ")");
      $("img", this).attr("src", backImg);
      $(this).css("pointer-events", "auto");
    }
  });
  $(".img-box").click(function () {

    // $(".img-box").css("height", "500")
    // .css("width", "500")
    console.log($(this).css("background-image"));
    console.log("innanför if");


    console.log("innanför else");
    $(this).featherlight();
  });

  $(".resetButton").click(function () {
    $(".img-box").each(function () {
      $(this).css("background-image", "");
      $("img", this).attr("src", "");
      $(this).css("pointer-events", "none")
    });
  });
});

/*
1.skicka in alla bilder från img-box
2. skicka in droppad bild
3. jämföra alla bilder med droppad bild
4. om vi hittar duplicera bild; return så att drop eventet stoppas
5. om ingen duplikant hittas, gör ingenting.
*/


var compareImg = function (droppedImg) {
  console.log("compare " + droppedImg);
/*
  $(".img-box").each(function () {
    var imge = droppedImg;
    console.log("image in the box " +  imge);

    if (droppedImg != imge) {
      console.log("inside if");
      return;
    }
  })
  */
 var imge = 0;
 $(".img-box").each(function () {

  imge++ ;
 })
console.log(" ss"  + imge);
for (var i = 0; i < imge; i++) {

  var ss = $("#imgBox" + i, "img").attr('src');
  console.log(" ss " +ss);
}


};
