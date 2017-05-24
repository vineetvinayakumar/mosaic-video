$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar").addClass("normalMenubar");
		$(".navItem").addClass("normalnavItem");
		$(".navbtn").addClass("navbtnLight");
	}
	else {
        $(".navbar").removeClass("normalMenubar");
		$(".navItem").removeClass("normalnavItem");
		$(".navbtn").removeClass("navbtnLight");
		$(".normalnavItem").attr('color', '#ffffff');
		$(".hamburgerMenu").attr('background-color', 'transparent !important');
		$(".hamburgerMenu").attr('border', '1px solid #ffffff !important');
    }
});

new WOW().init();







