$(document).ready(function(){

$('button#click').click(function(){
	alert('The button has been clicked!!!!!!!!')
});
$('button#hide').click(function(){
	$(".example:nth-child(2) h3").hide()
});
$(".example:nth-child(3) h4").hide();
$('button#show').click(function(){
	$("h4").show()
});
$('button#toggle').click(function(){
	$("h5").toggle()
});
$(".slidedownimg").hide()
$('button#slidedown').click(function(){
		$(".slidedownimg").slideDown("slow",function(){
				
});
	});
$('button#slideup').click(function(){
	$(".slideupimg").slideUp("slow",function(){

	});
});
$("button#slidetoggle").click(function(){
	$("p").slideToggle("slow");
});
$(".fadeinimg").hide()
$("button#fadein").click(function(){
	$(".fadeinimg").fadeIn("slow");
});
$("button#fadeout").click(function(){
	$(".fadeoutimg").fadeOut("slow");
});
$("button#addclass").click(function(){
	$(".example:nth-child(10) p").addClass("makered");
});
$("button#before").click(function(){
	$(".example:nth-child(11) h3").before("<p>I am a sneaky paragraph</p>");
});
$("button#after").click(function(){
	$(".example:nth-child(12) h3").after("<p>I am another sneaky paragraph</p>");
});
$("button#append").click(function(){
	$('.result').append("<h4>.append adds HTML! </h4>");
});
});