$(document).ready(function() {

  //This function toggles if the fade-square div is hiding or showing.
  $("#hide-show").click(function() {
    $("#hide-show-square").toggle();
  });

  //These functions toggle whether the element fades/out or to a certain opacity.
  $("#fade-toggle").click(function() {
    $("#fade-square").fadeToggle("slow");
  });

  $("#fade-opacity").click(function() {
    $("#fade-square").fadeTo("slow", 0.3);
  });

  //This function toggles whether the element will slideUp or slideDown.
  $("#slide").click(function(){
    $("#slide-square").slideToggle("fast")
  });

  //This function starts an animation on the element.
  $("#animate").click(function(){
    //storing a reference to the element in a variable so it
    //is more easily reusable.
    let square = $("#animate-square");

    square.animate({
      height: '15px',
      width: '20px',
      opacity: '0.3',
      top: '20px'
    }, 'slow');
    square.animate({
      top:"0px",
      height: '90%',
      width: '90%',
      opacity: '1'
    }, 'fast');
  });

  //These functions start/stop an animation.
  $("#start").click(function(){
    $("#stop-square").animate({
      width: '2px',
      height: '2px',
      top: '50%',
      left: '50%'
    }, 20000);
  });

  $("#stop").click(function(){
    $("#stop-square").stop();
  });

  //These functions demonstrate how get and set work by getting
  //the form value, and setting the form value.
  $("#get").click(function(){
    alert($("#get-set-form").val());
  });

  $("#set").click(function(){

    if ( $("#get-set-form").val() != 'Hello there!') {
      $("#get-set-form").val("Hello there!");
    } else {
      $("#get-set-form").val("Changed it!");
    }
  });

  //These functions add a paragraph element inside the div, and
  //then remove all the children element from div.
  $("#add").click(function(){
    $("#add-remove-square").append("<p>A paragraph element</p>");
  });

  $("#remove").click(function(){
    $("#add-remove-square").empty();
  });

  //These functions add and remove a red class to the div element.
  $("#class-add").click(function(){
    $("#class-square").addClass("red");
  });

  $("#class-remove").click(function(){
    $("#class-square").removeClass("red");
  });

  //These functions display an alert of the width and height of
  //the div element, can resize to get different results.
  $("#dimensions").click(function(){
    let width = $("#dimensions-square").width()
    let height = $("#dimensions-square").height()
    alert('Width is: ' + width + '. Height is: ' + height);
  });


});
