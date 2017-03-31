$(document).on('ready',function() {
  var counter = 3;
  var timing = null;
  var index1 = 0;
  var index2 = 0;
  var players = {player1: "#Player1",player2: "#Player2"}

  var interval = 1000;
  var finish_line = 80;

  //Al presionar presionar botón jugar
  $("#start_btn").on("click", function (){
  	event.preventDefault();
    //$("#show_winner").html("");
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
    
    move_coin();
    //move_coin(player2);
    $("#start_btn").html("Resetear");
  }
  //bloque que anima la moneda y la detiene si no se ha presionado ningún botón


  function move_coin(){

    currentCell1 = $(players.player1).find(".active").next().addClass("active");
    currentCell2 = $(players.player2).find(".active").next().addClass("active");
    //currentCell2 = $(player).find(".active").next().addClass("active");
    $(players.player1).find(".active").first().removeClass("active");
    $(players.player2).find(".active").first().removeClass("active");
    index1 = currentCell1.attr("id");
    index2 = currentCell2.attr("id");
   
    interval=500;
    timing2 = setTimeout(function() {
      move_coin(players), interval;
    });
    if (index1 < 99 || index2 < 99){      
      
    } else {
      clearTimeout(timing2);
      $(players.player1).find(".active").first().removeClass("active");
      $(players.player1).find("td:last-child").addClass("active");
      $(players.player2).find(".active").first().removeClass("active");
      $(players.player2).find("td:last-child").addClass("active");
    }
 
  }

  $(document).on('keyup', function(key) {
    // Detecta cual tecla fue presionada y llama al método o función apropiada.
    if (key.keyCode == 65) { 
      //para detener el avance de la moneda
      prueba();
      
    }
  });


  function prueba(){
    console.log("hola");
    clearTimeout(timing2);
  }
    
  

  

});
