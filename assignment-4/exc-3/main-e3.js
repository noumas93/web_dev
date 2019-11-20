$("document").ready(function () {
  console.log("kaka");

  $(".draggable").draggable({
    helper: "clone",
    revert: true,
    revertDuration: 200
  });

  $(".img-box").droppable({
    accept: "img",
    drop: function (event, ui) {
      // ui är objektet "bilden" som dras
      console.log(ui.draggable.attr("src"));
      //event.target är div som objektet släpps i
      console.log(event.target);
      console.log("kaka");
      let backImg = ui.draggable.attr('src');
      console.log(backImg);
      $(this).css("background-image", "url(" + backImg + ")");
      $(this).css("pointer-events", "auto")

    }
  });
  $(".img-box").click(function () {
    console.log($(this).css("background-image"));
    console.log("innanför if");


    console.log("innanför else");
    $(this).featherlight();

});
});


//
//$(".img-box").droppable() {
//});