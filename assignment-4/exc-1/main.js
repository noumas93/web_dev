$(document).ready( function () {

$( function() {
    $( "#menu" ).menu();
  } );


  $( function() {
    $( "#tabs" ).tabs();
  } );

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#selectable" ).selectable();
  } );


  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  
  $('.slider').bxSlider({
    mode:'fade',
    captions: true,
    
  });
  

});
