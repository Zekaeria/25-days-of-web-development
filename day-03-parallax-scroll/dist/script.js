//Thank you to Michael Fangman: https://codepen.io/michaelfangman/pen/kWqbeb
//Thank you to Заур: https://codepen.io/zaurmag/pen/pgKjLM

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',-(scrolled*0.0315)+'rem');
  $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.hero > h1').css('opacity',1-(scrolled*.00175));
};

$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: 1,
  percentPosition: true
})