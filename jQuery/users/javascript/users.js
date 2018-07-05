$(document).ready(function(){
	
	$('form').submit(function(){
		var firstname=$("#first_name").val();
		var lastname=$("#last_name").val();
		var emailadd=$("#email_address").val();
		var phonenum=$("#phone_number").val();
		$('#entry').append("<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+emailadd+"</td><td>"+phonenum+"</td></tr>")
			return false;
	});


});