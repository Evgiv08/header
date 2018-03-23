$('.menumobile').on('click', function(e) {
	e.preventDefault();
	if ($('.mobile').hasClass('showmenu')) {
		$('.mobile').removeClass('showmenu');
		$(".menumobile").html("<p></p> <p>Menu</p>")
	} else {
		$('.mobile').addClass('showmenu');
		$(".menumobile").html("<p class='rotate'></p> <p>Menu</p>");
	}
});
$('.categories').on('click', function(e) {
	e.preventDefault();
	if ($('.sub-menu').hasClass('sub-menu-show')) {
		$('.sub-menu').removeClass('sub-menu-show');
	} else {
		$('.sub-menu').addClass('sub-menu-show');
	}
});