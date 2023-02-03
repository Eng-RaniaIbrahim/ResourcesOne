var  header = $("header");
var subheader =$(".top-header");
$(window).scroll(()=>{
 var Y = $(window).scrollTop();
 if(Y > header.height() ){
  header.addClass("fixed-top");
  subheader.hide();
 }else{
    header.removeClass("fixed-top");
    subheader.show();
 }
})


















$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        },
    },
});