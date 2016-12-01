jQuery(document).ready(function($) {

	$(".widget_categories ul li ul.children").hide();

	$(".widget_categories ul li").hover(
		function () {
			$(this).find("ul.children").show('slide', 'fast');
		},
		function () {
			$(this).find("ul.children").hide('slide', 'fast');
		}
);
});