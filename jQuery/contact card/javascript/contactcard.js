$(document).ready(function(){
	var count = 0
	$('form').submit(function(){
		$("#entry").show()
		count++;
		count2=count+1;
		console.log(count);
		var group =String(count);
		console.log(group);
		var firstname=$("#first_name").val();
		var lastname=$("#last_name").val();
		var description=$("#description").val();
		 $('form')[0].reset(),
		$('#entry').append("<div class = 'first' ><h1>"+firstname +" "+lastname+"</h1><p style='display: none'>"+description+"</p></div>")// <div class = 'second' ><h1>"+description+"</h1></div>")	
	
		//$('#entry').append("<div class = 'first"+group+"' ><h1>"+firstname +" "+lastname+"</h1><h2>Click for Descriptions!</h2></div> <div class ='second"+group+"'> <h1>"+description+"</h1></div>")// <div class = 'second' ><h1>"+description+"</h1></div>")
		//$(".second"+group).hide()


		return false;	
	});
	$(document).on('click', '.first' , function(){	
			$(this).children().toggle()
		});
	
//	});
		//$('.second1').show()
	




	/*	$(document).on('click', '.first1' , function(){

		$(this).hide()
		$('.second1').show()
	
	});
		$(document).on('click', '.second1' , function(){

		$(this).hide()
		$('.first1').show()

	});

		$(document).on('click', '.first2' , function(){

		$(this).hide()
		$('.second2').show()
	
	});
		$(document).on('click', '.second2' , function(){
		$(this).hide()
		$('.first2').show()
	
	});
		$(document).on('click', '.first3' , function(){

		$(this).hide()
		$('.second3').show()
	
	});
		$(document).on('click', '.second3' , function(){
		$(this).hide()
		$('.first3').show()
	
	});
	/*	$(document).on('click', '.second' , function(){
		$(this).hide()
	
		$('.first').show()	
	});

		
	/*$(document).on('click', 'first' , function(){
		$(this).hide()
		var description=$("#description").val();
		$('#entry').append("<div class = 'second' ><h1>"+description+"</h1></div>")	
	});
	$(document).on('click', '.second', function(){
		$(this).hide()
		var firstname=$("#first_name").val();
		var lastname=$("#last_name").val();
		$('#entry').append("<div class = 'first' ><h1>"+firstname +" "+lastname+"</h1></div>")	
	});
	*/
});


	

