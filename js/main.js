$(function(){
     //ハンバーガーメニュー
$('#js-hamburger').click(function(){
     $('body').toggleClass('is-drawerActive')
     if($(this).attr('aria-expanded') == "false"){
          $(this).attr('aria-expanded', "true")
          $('#js-global-menu').attr('area-hidden', "false")
     }else{
          $(this).attr('aria-expanded', "false")
          $('#js-global-menu').attr('area-hidden', "true")
     }
})
//背景の黒をクリックするとドロワーが閉じる
　　$('#js-drawer-background').click(function(){
     $('body').removeClass('is-drawerActive')
     $('#js-hamburger').attr('aria-expanded', "false")
     $('#js-global-menu').attr('area-hidden', "true")
})

// よくある質問のアコーディオンパネル
$('.faq-first').show();
$('.jsAccordionTitle').click(function(){
$(this).next().toggleClass('is-open');
});
$('.accordion-content').click(function(){
$(this).removeClass('is-open');
});

//フォームのsubmitをdisabledで制御して入力するまでsubmitできなくする
$(document).ready(function () {

     const $submitBtn = $('#js-submit')
     $('#form input,#form textarea').on('change', function () {
       if (
         $('#form input[type="text"]').val() !== "" &&
         $('#form input[type="email"]').val() !== "" &&
         $('#form input[type="checkbox"]').val() !== "" &&
         $('#form #privacyCheck').prop('checked') === true 
       ) {
         $submitBtn.prop('disabled', false);
       } else {
         $submitBtn.prop('disabled', true);
       }
     });
   
   });
//お問い合わせフォーム
   $('#form').submit(function (event) {
     var formData = $('#form').serialize();
     $.ajax({
       url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdyfOz02WaZak-EabqEYXXdfYHWLnY_pnLRJFhQch9g3N7kGQ/formResponse",
       data: formData,
       type: "POST",
       dataType: "xml",
       statusCode: {
         0: function () {
           $(".end-message").slideDown();
           $(".submit-btn").fadeOut();
           //window.location.href = "thanks.html";
         },
         200: function () {
           $(".false-message").slideDown();
         }
       }
     });
     event.preventDefault();
     //最後にテキストを空にする
     $('#form input[type="text"]').val("");
     $('#form input[type="email"]').val("");
     $('#form textarea').val("");　　
   });
   
  //ページ内スムーズスクロール
   $('a[href^="#"]').click(function(){
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
          scrollTop: position
        },speed, "swing");
        return false;
   });

});

//AOS.jsによるアニメーション
AOS.init({
     duration: 500,
     easing: 'ease-in',
     delay: 100,
     placement:'bottom-top'
});

// swiper.jsによる制作実績のスライダー
const swiper = new Swiper('.swiper-container', {
     autoplay: {
          delay: 5000,
        },
     autoHeight: true,
     slidesPerView:1,
     spaceBetween:5,
　　　effect: 'slide',
     centeredSlides: true,
     loop: true,
     breakpoints:{
          1280:{
               slidesPerView: 5,
               spaceBetween: 30 
          },

          768:{
               slidesPerView:3,
               spaceBetween:15,
           
          },
          414:{
               slidesPerView:2,
               spaceBetween:10,
          
          }
     },
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets', 
    　　clickable: true, 
     },
   
   });