//delayed animation of browser window animation/entry
$(document).ready(function() {
  setTimeout(
    function()
    {
      $('.header__bot__browser').toggleClass('browser__show');
    }, 300);
});

//opening the mobile menu when hamburger is clicked
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('.mobile__menu__container').toggleClass('mobile__nav__open');
    $('.overlay').toggleClass('overlay__highlight');
	});
});

//changing color of overlay
$('body').click(function () {
    var span1 = document.getElementsByClassName('span1');
    var span3 = document.getElementsByClassName('span3');
    //var span3 = document.getElementsByClassName('span3');

    if ($('#hamburger').hasClass('open') === true) {
      $(span1).addClass('colored');
      $(span3).addClass('colored');
      //$(span1).css("background-color","red");
    } else {
      $(span1).removeClass('colored');
      $(span3).removeClass('colored');
    }
});

//closing mobile nav, restoring hamburger, and changing back overlay color on mobile
//nav selection

//remember to use "one" instead of "on" in order to only trigger animation of element once
$(document).ready(function(){
	$('.mobile__nav__item').click(function(){
      $('.mobile__menu__container').removeClass('mobile__nav__open');
      $('.overlay').toggleClass('overlay__highlight');
      $('#hamburger').removeClass('open');
	});
});

$('.item1').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__desc1').addClass('start-odd');
  } else {
    $('.services__container__item__desc1').removeClass('start-odd');
  }
});

$('.item1').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__photo1').addClass('start-even');
  } else {
    $('.services__container__item__photo1').removeClass('start-even');
  }
});

$('.item2').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__desc2').addClass('start-even');
  } else {
    $('.services__container__item__desc2').removeClass('start-even');
  }
});

$('.item2').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__photo2').addClass('start-odd');
  } else {
    $('.services__container__item__photo2').removeClass('start-odd');
  }
});

$('.item3').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__desc3').addClass('start-odd');
  } else {
    $('.services__container__item__desc3').removeClass('start-odd');
  }
});

$('.item3').one('inview', function(event, isInView) {
  if (isInView) {
    $('.services__container__item__photo3').addClass('start-even');
  } else {
    $('.services__container__item__photo3').removeClass('start-even');
  }
});



//$('.bottom__bottom').one('inview', function(event, isInView) {
//  if (isInView) {
//    $('.footer').addClass('footer__large');
//  } else {
//    $('.bottom__bottom').removeClass('footer__large');
//  }
//});


//$(document).ready(function() {
//  setTimeout(
//    function()
//    {
//      $('.footer__bottom').one('inview', function(event, isInView) {
//        if (isInView) {
//          $('.footer').addClass('footer__large');
//        } else {
//          $('.footer__bottom').removeClass('footer__large');
//        }
//      });
//    }, 2000);
//});

//$(document).ready(function() {
//  $('.jumbotron__button').click(function() {
//    $('.header__bot__browser').toggleClass('browser__show');
//  });
//});


$(document).ready(function() {
  $('.test-button').click(function() {
    $('.footer__container').toggleClass('footer__container__large');
    $('.footer__container__left').toggleClass('footer__content__large');
    $('.footer__container__right').toggleClass('footer__content__large');
    $('.footer__spacer').toggleClass('footer__spacer__hide');
    $('.footer__contact__container').toggleClass('footer__contact__container__large');
    $('.footer__container__left').toggleClass('footer__content__margin__large');
    $('.footer__container__right').toggleClass('footer__content__margin__large');
  });
});






var footer_h = $('.footer').height();
var page_height = $(window).height();
var difference = (page_height - footer_h);
var footer_inner = $('.footer').innerHeight();
var footer_visible = $('.footer').scrollHeight;
var poop = $('.footer').offsetTop;



var page_height = $(document).height();
var window_visible = $(window).scrollTop();


document.getElementsByClassName('services').onscroll = function() {
        console.log("scrolling");
      };



$(document).ready(function(){
  var poop = $('.footer').offsetTop;
});


var y = $(window).scrollY;

var page_height = $(window).height();
