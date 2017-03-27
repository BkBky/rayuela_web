$(document).on('ready',function() {
  var counter = 3;
  var timing = 0;
  var finish_line = 80;
  var index = 0;
  //click botón jugar
  $("#start_btn").on("click", function (){
  	event.preventDefault();
    counter_time(); 
  });

  //contador regresivo antes de que comience el movimiento del moneda
  function counter_time(){
    if (counter != 0){
      console.log(counter);
      $("#show_counter").html(counter);
      counter--;
      setTimeout(counter_time, 1000);
    } else{
    	begin_game();
    }
  }

  function begin_game(){
  	$("#show_counter").html("¡Comienza el juego!");
  	move_coin();
  }
  //Esta función anima la moneda
  function move_coin(){
    currentCell = $("#Player1").find(".active").next().addClass("active");
    $("#Player1").find(".active").first().removeClass("active");
    timing = setTimeout(move_coin, 10); 
  }

  //establezco la tecla con la que haré el stop y determiaré al ganador.
  $(document).keyup(function(key){ 
    //65 es la telcla a
    if (key.keyCode == 65) { 
      index = currentCell.attr("id");
      
      //para detener el avance de la moneda
      clearInterval(timing);
      winner();
    }
  });

  function winner (){
    console.log(index);
     player_stop1 = (finish_line - index);
     console.log(player_stop1);
    if(player_stop1 == finish_line ){
      $("#show_winner").html("¡Eres el ganador");

    } else if (player_stop1 < finish_line ){
      $("#show_winner").html("¡Perdiste!");

    } else {
      $("#show_winner").html("¡Perdiste2");
    }
  }

  

});
