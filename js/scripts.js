// the section below is related to scrolling lock header
// cache the element
var $navBar = $('.nav');
var $filler = $('.navfiller');

// find original navigation bar position
var navPos = $navBar.offset().top;

// on scroll
$(window).scroll(function() {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
        $filler.addClass('fixed');
    } else {
        $navBar.removeClass('fixed');
        $filler.removeClass('fixed');
    }

});
// SECTION END

// the section below is related to modal business card
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// SECTION END

var $setter = $(".nav-wrapper");
$setter.siblings(".page-content").css("max-width", $setter.width()+"px");
var $setter = $(".page-content");
$setter.siblings(".modal-content").css("max-width", $setter.width()+"px");

$(document).ready(function() {
    $(".gridbackground").css("height", $(".page-content").height());
  });