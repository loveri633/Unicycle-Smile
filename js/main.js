$(function($) {

    $('.bg-switcher').bgSwitcher({
        images: ['../images/slide1.jpg','../images/slide2.jpg','../images/slide3.jpg','../images/slide4.jpg','../images/slide5.jpg'],
        interval: 5000,
        loop: true
    });


//     // スクロールして表示領域に入ったらclass付与
//     $(".js-fadeRight").on("inview", function () {
//         $(this).addClass("is-inview");
//       });




//       //.box要素が画面に入った時〜
// $(".box").on("inview", function () {
//     //その.boxにクラスfadeInRight追加
//     $(this).addClass("fadeInRight");

//     if(isInView) {
//         $(this).stop().addClass("fadeInRight");
//     } else {
//         $(this).stop().removeClass("fadeInRight");
//     }
//   });


//     $(".inview_re").on("inview", function (event, isInView) {
//       if (isInView) {
//         $(this).stop().addClass("is-show");
//       } else {
//         $(this).stop().removeClass("is-show");
//       }
//     });
//   });

//.box要素が画面に入った時〜
$(".boxRight").on("inview", function (event, isInView) {
    //その.boxにクラスfadeInRight追加
    if (isInView) {
    $(this).stop().addClass("fadeInRight");
} else {
    $(this).stop().removeClass("fadeInRight");
}
  });

  //.box要素が画面に入った時〜
$(".boxLeft").on("inview", function (event, isInView) {
    //その.boxにクラスfadeInRight追加
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
  });
});

