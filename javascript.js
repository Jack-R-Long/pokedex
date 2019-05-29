$(document).ready(function(){
    for(var i=1; i<153; i++){
        $.get("https://pokeapi.co/api/v2/pokemon/"+i+"/", function(res) {
            // console.log(res)

            var html_img = "";
            html_img +="<img src=";
            html_img += res.sprites.front_shiny;
            html_img +=" alt='pokemon'>";
            // console.log(html_img)
            $(".sprites").append(html_img)

        },"json");
    }

    


});
