$(function($) {

    $('.bg-switcher').bgSwitcher({
        images: ['../images/slide1.jpg','../images/slide2.jpg','../images/slide3.jpg','../images/slide4.jpg','../images/slide5.jpg'],
        interval: 4000,
        loop: true
    });

    $(".burger").click(function () {
        $(".burger").toggleClass("is-active");
        $(".menu").toggleClass("is-active");
      });
      $(".move").click(function () {
        $(".burger").toggleClass("is-active");
        $(".menu").toggleClass("is-active");
    });


//.boxRight要素が画面に入った時〜
$(".boxRight").on("inview", function (event, isInView) {
    //その.boxRightにクラスfadeInRight追加
    if (isInView) {
    $(this).stop().addClass("fadeInRight");
} else {
    $(this).stop().removeClass("fadeInRight");
}
  });

  //.boxLeft要素が画面に入った時〜
$(".boxLeft").on("inview", function (event, isInView) {
    //その.boxLeftにクラスfadeInRight追加
    if (isInView) {
    $(this).stop().addClass("fadeInLeft");
} else {
    $(this).stop().removeClass("fadeInLeft");
}
  });

    
$(".slide-items").slick({
    autoplay:true,
    slidesToShow:3,
    infinite:true,
    slidesToScroll:1,
    responsive:[
      {
          breakpoint: 480,
          settings:{
              slidesToShow:1,
          }
      }],
      respondTo: 'slider'
  });
});

