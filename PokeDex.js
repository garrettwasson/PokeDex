$(document).ready(function(){
	for(var i = 1; i < 803; i++){
		$('#list').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" id="${i}">`);
	}
	
	$(document).on("click", "img", function(){
		var id = this.id
		$.get("https://pokeapi.co/api/v2/pokemon/" + id, function(pokeInfo){
			console.log(pokeInfo);
			var html_str="";
			html_str+= "<h1>"+ pokeInfo['name']+"</h4>";
			html_str+=`<div id="img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" id="${id}"></div>`;
			html_str += "<h3>Height:</h3>";
			html_str += pokeInfo['height'];
			html_str += "<h3>Weight</h3>";
			html_str += pokeInfo['weight'];
			html_str += "<h3>Types</h3>";
			html_str += "<ul>";
			for (var k = 0; k < pokeInfo['types'].length; k++) {
				html_str += "<li>" + pokeInfo['types'][k]['type']['name'] + "</li>";
			}
			html_str += "</ul>";
		
		$("#info").html(html_str)
		});
	});
});