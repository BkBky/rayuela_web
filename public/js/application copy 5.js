$(document).on('ready',function() {
  var counter = 3;
  var timing = null;
  var index1 = 0;
  var index2 = 0;
  var interval = 1000;
  var finish_line = 80;
  var pushkey1 = false;
  var pushkey2 = false;
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
    var players = {player1: "#Player1", player2: "#Player2"}
    move_coin(players);
    //move_coin(player2);
    $("#start_btn").html("Resetear");
  }
  //bloque que anima la moneda y la detiene si no se ha presionado ningún botón


  function move_coin(players){

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
    if (index1 < 99){ 
        if (pushkey1 == true){
        clearTimeout(timing2);
      } else if (pushkey2 == true){
        clearTimeout(timing2);
      }

      
    } else {
      clearTimeout(timing2);
      $(players.player1).find(".active").first().removeClass("active");
      $(players.player1).find("td:last-child").addClass("active");
      $(players.player2).find(".active").first().removeClass("active");
      $(players.player2).find("td:last-child").addClass("active");
    }
    //establezco la tecla con la que haré el stop y determiaré al ganador.
  $(document).keyup(function(key){ 
    //65 es la telcla a
   if (key.keyCode == 65) { 
     console.log(index1); 
          //para detener el avance de la moneda
     pushkey1 = true;
    } else if (key.keyCode == 88) {
     console.log(index2);
     pushkey2 = true;


    }
      //winner();
    
  });

  }



 
    
  

  

});
