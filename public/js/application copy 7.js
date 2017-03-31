$(document).on('ready',function() {
  var counter = 3;
  var timing = null;
  var index1 = 0;
  var index2 = 0;
  var player1 = "#Player1";
  var player2 = "#Player2";
  var stopcoin = false;
   var stopcoin2 = false;
  var interval = 1000;
  var finish_line = 80;

  //Al presionar presionar botón jugar
  $("#start_btn").on("click", function (event){
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
    move_coin();
    //move_coin(player2);
    $("#start_btn").html("Resetear");
  }
  //bloque que anima la moneda y la detiene si no se ha presionado ningún botón


  function move_coin(){
    
  
    currentCell1 = $(player1).find(".active").next().addClass("active");
    currentCell2 = $(player2).find(".active").next().addClass("active");
    // currentCell2 = $(player).find(".active").next().addClass("active");
    $(player1).find(".active").first().removeClass("active");
    $(player2).find(".active").first().removeClass("active");
    index1 = currentCell1.attr("id");
    index2 = currentCell2.attr("id");
   
    interval=500;
    timing2 = setTimeout(function() {
      move_coin(), interval;
    });
   
    if (stopcoin == true && player1 == player1 || index1 == 100){
          clearTimeout(timing2);
        } else  (stopcoin2 == true && player2 == player2 || index2 == 100){
          clearTimeout(timing2);
        } 
    //     else {
    //   clearTimeout(timing2);
    //   $(player1).find(".active").first().removeClass("active");
    //   $(player1).find("td:last-child").addClass("active");
    //   $(player2).find(".active").first().removeClass("active");
    //   $(player2).find("td:last-child").addClass("active");
    // }
 
  }

  $(document).on('keyup', function(key) {
    // Detecta cual tecla fue presionada y llama al método o función apropiada.
    if (key.keyCode == 65) { 
      //para detener el avance de la moneda
     
      stopcoin = true;
      
    }
    if (key.keyCode == 88) {
    
     stopcoin2 = true;
    }
  });


  
    
  

  

});
