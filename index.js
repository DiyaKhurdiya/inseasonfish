const MIN_DEPTH = 0
const MAX_DEPTH = 10929
const firstPageHeight = $(".first-page-offset").height()

// Show depth
$(document).scroll(() => {
  var scrollTop = Math.ceil(($(window).scrollTop() - firstPageHeight) / 17)
  // Hide if sea level or beyond Challenger Deep
  if(scrollTop <= MIN_DEPTH || scrollTop >= MAX_DEPTH){
    scrollTop = (scrollTop >= MAX_DEPTH)? MAX_DEPTH : MIN_DEPTH;
    $(".depth-line").css('opacity', '0');
  }
  else{
    $(".depth-line").css('opacity', '1');
  }
  $(".depth-line span").text(scrollTop)
})