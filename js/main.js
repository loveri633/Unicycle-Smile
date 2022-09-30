$(function($) {

    $('.bg-switcher').bgSwitcher({
        images: ['../images/slide1.jpg','../images/slide2.jpg','../images/slide3.jpg','../images/slide4.jpg','../images/slide5.jpg'],
        interval: 5000,
        loop: true
    });


    
$(".slide-items").slick({
    autoplay:true,
    slidesToShow:3,
    infinite:true,
    slidesToScroll:1,
  });
});

