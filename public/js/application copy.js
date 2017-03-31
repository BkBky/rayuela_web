$(document).on('ready',function() {
  var counter = 3;
  var timing = 0;
  var finish_line = 80;
  var index1 = 0;


  //Al presionar presionar botón jugar
  $("#start_btn").on("click", function (){
  	event.preventDefault();
    $("#show_winner").html("");
    counter_time(); 
  });


  //contador regresivo antes de que comience el movimiento del moneda
  function counter_time(){
    if (counter != 0){
      $("#show_counter").html(counter);
      counter--;
      setTimeout(counter_time, 1000);
    } else{
    	begin_game();
    }
  }
  //Se ejecuta una vez concluído el contador y cambio el nombre del botón.
  function begin_game(){
  	$("#show_counter").html("¡Comienza el juego!");
  	move_coin();
    $("#start_btn").html("Resetear");
  }
  //Esta función anima la moneda
  function move_coin(){
    currentCell1 = $("#Player1").find(".active").next().addClass("active");
    currentCell2 = $("#Player2").find(".active").next().addClass("active");
    $("#Player1").find(".active").first().removeClass("active");
    $("#Player2").find(".active").first().removeClass("active");
    timing = setTimeout(move_coin, 10); 
   
    index1 = currentCell1.attr("id");
    index2 = currentCell2.attr("id");
    //codigo para que la animación no siga corriendo una vez que llegue a la casilla 100
    if (index1 === "100" || index2 === "200"){
       clearTimeout(timing);
       winner();
    }
  }
  //establezco la tecla con la que haré el stop y determiaré al ganador.
  $(document).keyup(function(key){ 
    //65 es la telcla a
    if (key.keyCode == 65) { 
      index1 = currentCell1.attr("id");
      //para detener el avance de la moneda
      stop = clearTimeout(timing);
      console.log(stop);
      winner();
    }
  });

  function winner (){
    // console.log(index1);
    player_stop1 = (finish_line - index1);
    // console.log(player_stop1);
    if(player_stop1 == finish_line ){
      $("#show_winner").html("¡Eres el ganador");

    } else if (player_stop1 < finish_line ){
      $("#show_winner").html("¡Perdiste!");

    } else {
      $("#show_winner").html("¡Perdiste2");
    }
    reset_game();
  }
  
  function reset_game(){
    // console.log("#"+index1);
    // preventDefault();
    $("#start_btn").on("click", function (){
      event.preventDefault();
    
      $("#Player1").find(".active").first().removeClass("active");
      $("#Player1 td:nth-child(2)").addClass("active");
      //$("#start_btn").html("Jugar");
      counter = 3;
      clearTimeout(timing);
      counter_time(); 
    });
  }
  

  

});
