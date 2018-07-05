$(document).ready(function(){

	$('img').click(function(){
		var $temp = $(this).attr('data-alt-src');
		var $temp2 = $(this).attr('src');
		console.log($temp);
		$(this).attr("src",$temp);
		$(this).attr("data-alt-src",$temp2);
	});



});