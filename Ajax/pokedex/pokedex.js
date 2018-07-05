
$(document).ready(function(){

	for(var i = 1; i < 152; i++){
	var	num=String(i);
	$('#left').append("<img id = "+num+" "+"src=https://pokeapi.co/media/img/"+[i]+".png>")
}
	$('img').click(function(){
		var id = $(this).attr('id');
		$.get("https://pokeapi.co/api/v2/pokemon/"+id+"/", function(res) {
			console.log(res);
			  var html_str = "";
			  		html_str += "<img src=https://pokeapi.co/media/img/"+id+".png>"
			  		html_str += "<h1>" + res.name + "</h1>"
                    html_str += "<h4>Types</h4>";
                    html_str += "<ul>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_str += "</ul>";
                    html_str +="<h4>Height</h4>"
                    html_str +="<h5>" + res.height + "</h5>"
                    html_str +="<h4>Weight</h4>"
                    html_str +="<h5>" + res.weight + "</h5> "
                     $("#right").append(html_str);
                    }, "json");

	})

});
