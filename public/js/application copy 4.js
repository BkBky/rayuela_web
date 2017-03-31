$(document).on('ready',function() {
  var counter = 3;
  var timing = null;
  var index1 = 0;
  var player1 = "#Player1"
  var interval = 1000;

  //Al presionar presionar botón jugar
  $("#start_btn").on("click", function (){
  	event.preventDefault();
    $("#show_winner").html("");
    timing = setInterval(function() {
      if (counter != 0){
        $("#show_counter").html(counter);
        counter--;
      } else{
        begin_game();
      }
    }, interval);
  });

  function begin_game(){
  	$("#show_counter").html("¡Comienza el juego!");
    clearInterval(timing);
    move_coin(player1);
    $("#start_btn").html("Resetear");
  }
  //bloque que anima la moneda y la detiene si no se ha presionado ningún botón
  function move_coin(player){
    currentCell1 = $(player).find(".active").next().addClass("active");
    $(player).find(".active").first().removeClass("active");
    index1 = currentCell1.attr("id");
    //console.log(index1);
    interval=500;
    timing2 = setTimeout(function() {
      move_coin(player), interval;
    });
    if (index1 < 99){      
      console.log(index1);
    } else {
      clearTimeout(timing2);
      console.log("fin!");
      $(player).find(".active").first().removeClass("active");
      $(player).find("td:last-child").addClass("active");
    }

  }
 
    
  

  

});
