$(function(){

	$(".profile__tab").click(function() {
	$(".profile__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".profile__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.hesap-ac__item').click(function(){	
		$(".hesap-ac__item").removeClass("active").eq($(this).index()).addClass("active");
		$('.hesap-ac__button').removeClass('disabled');
	});

$('.hesap-ac__item2').click(function(){	
		$(".hesap-ac__item2").removeClass("active").eq($(this).index()).addClass("active");
		$('.hesap-ac__button2').removeClass('disabled');
	});

$('.details-link-btn').click(function(){	
		$(".card").addClass("active");
	});

$('.details-link-btn-back').click(function(){	
		$(".card").removeClass("active");
	});


// $('.item-gercec-col-wrapper-btn1').click(function(){	
// 		$(this).toggleClass('active');	
// 		$('.gercek-a').toggleClass('active');
// 		$('.gercek-b').toggleClass('active');
// 		$('.item-gercec-col-wrapper-btn2').removeClass('active');
		

// 	});

// $('.item-gercec-col-wrapper-btn2').click(function(){	
// 		$(this).toggleClass('active');	
// 		$('.gercek-a').toggleClass('active');
// 		$('.gercek-b').toggleClass('active');
// 		$('.item-gercec-col-wrapper-btn1').removeClass('active');
		

// 	});

$(".tab-gercile .item-gercec-col").click(function() {
	$(".tab-gercile .item-gercec-col").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-content-gercec").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".tab-gercile .item-gercec-col2").click(function() {
	$(".tab-gercile .item-gercec-col2").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-content-gercec2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.tab-gercile .item-gercec-col').click(function(){	
		$('.item-gercec-col-wrapper-btn1').removeClass('item-gercec-col-wrapper-btn--start');	
		

	});

$('.tab-gercile .item-gercec-col2').click(function(){	
		$('.item-gercec-col-wrapper-btn3').removeClass('item-gercec-col-wrapper-btn--start2');	
		

	});



$('.education-video').click(function(){	
		$('.popup').addClass('active');	
		

	});	


jQuery(function($){
  $(document).mouseup(function (e){ 
    var searchWrapper = $(".popup__content"); 
     var searchRow = $(".popup"); 
    if (!searchWrapper.is(e.target) 
        && searchWrapper.has(e.target).length === 0) { 
      searchRow.removeClass('active'); 
    }
  });
});


 // ------ start input width calendar---
$( function() {
    $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/arrow-down.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
// ------ end input width calendar---

});