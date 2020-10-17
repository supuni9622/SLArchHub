//------------------------- PROJECTS PAGE JAVA SCRIPT -----------------------------------------------------------------------------//

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

//----------------------Project Content -----------------------------//

/*$('#list').click(function(event){
    event.preventDefault();
    $('.card-deck').addClass('list-group-item');
    $('.card-deck').removeClass('grid-group-item'); 
    $('#grid-view').hide();
    $('#list-view').show();
});

$('#grid').click(function(event){
    event.preventDefault();
    $('.card-deck').removeClass('list-group-item');
    $('.card').addClass('grid-group-item'); 
    $('#grid-view').show();
    $('#list-view').hide();
}); */


$('#list').click(function(event){
    event.preventDefault();
    $('.card-deck').addClass('list-group-item');
    $('.card-deck').removeClass('grid-group-item');
    $('#grid-view').hide();
    $('#list-view').show();
  });
  
  $('#grid').click(function(event){
    event.preventDefault();
    $('.card-deck').removeClass('list-group-item');
    $('#list').removeClass('active');
    $('#grid-view').show();
    $('#list-view').hide();
  }); 