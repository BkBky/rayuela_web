$(document).on('ready',function() {
  var counter = 3;
  //var counter_timing = 0;
  player1 = "#Player1"
  var timing = null;
  //var timing = setInterval(move_coin, 100);
  var intervalId = null;
  var finish_line = 80;
  var index1 = 0;
  interval = 1000;



  //Al presionar presionar botón jugar
  $("#start_btn").on("click", function (){
  	event.preventDefault();
    $("#show_winner").html("");
    
    intervalId = setInterval(counter_time, interval);
   
     counter_time(); 
  });


  //contador regresivo antes de que comience el movimiento del moneda
  function counter_time(){
 
    if (counter != 0){
      $("#show_counter").html(counter);
      counter--;
      //var timing1 = setInterval(counter_time, 1000);
    } else{
      clearInterval(intervalId);
      //clearInterval(timing1);
    	begin_game();
      
    }
    
  }
  //Se ejecuta una vez concluído el contador y cambio el nombre del botón.
  function begin_game(){
  	$("#show_counter").html("¡Comienza el juego!");
  	
    move_coin(player1);

    $("#start_btn").html("Resetear");
 
    //clearInterval(counter_timing);
  }
  //Esta función anima la moneda
  function move_coin(player){
     
    currentCell1 = $(player).find(".active").next().addClass("active");
    $(player).find(".active").first().removeClass("active");

    index1 = currentCell1.attr("id");
    
    console.log(index1);
     
 
    // console.log(timing);
    if (index1 < 99){ 
       if(interval==1000 ){
          interval = 500;

        }
     intervalId = setInterval(move_coin(player), interval);
            
      //  //    $("#Player1").find("#100").addClass("active");
      // // // //   console.log("hola");
      // // // // // // codigo para que la animación no siga corriendo una vez que llegue a la casilla 100
        
      // // // // //  //winner();
        } else {
           
         clearInterval(intervalId);
       }
    
           
    
  }
  // //establezco la tecla con la que haré el stop y determiaré al ganador.
  // $(document).keyup(function(key){ 
  //   //65 es la telcla a
  //   if (key.keyCode == 65) { 
  //     index1 = currentCell1.attr("id");
  //     //para detener el avance de la moneda
  //     clearInterval(timing);
      
  //     //winner();
  //   }
  // });

  // function winner (){
  //   // console.log(index1);
  //   player_stop1 = (finish_line - index1);
  //   // console.log(player_stop1);
  //   if(player_stop1 == finish_line ){
  //     $("#show_winner").html("¡Eres el ganador");

  //   } else if (player_stop1 < finish_line ){
  //     $("#show_winner").html("¡Perdiste!");

  //   } else {
  //     $("#show_winner").html("¡Perdiste2");
  //   }
  //   reset_game();
  // }
  
  // function reset_game(){
  //   // console.log("#"+index1);
  //   // preventDefault();
  //   $("#start_btn").on("click", function (){
  //     event.preventDefault();
    
  //     $("#Player1").find(".active").first().removeClass("active");
  //     $("#Player1 td:nth-child(2)").addClass("active");
  //     //$("#start_btn").html("Jugar");
  //     counter = 3;
  //     clearInterval(timing);
  //     counter_time(); 
  //   });
  // }
  

  

});
