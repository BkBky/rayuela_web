$(document).on('ready',function() {
  counter = 3;
  timing = null;
  index1 = 0;
  index2 = 0;
  player1 = "#Player1";
  player2 = "#Player2";
  stopcoin1 = false;
  stopcoin2 = false;
  interval = 1000;
  

  //When click button start the counter
  $("#start_btn").on("click", function (event){
  	event.preventDefault();
    //counter show on view and later go to 'begin_game' funtion or send values to 'move_coin' 
    timing = setInterval(function() {
      if (counter != 0){
        $("#show_counter").html(counter);
        counter--;
      } else {
        begin_game();
        $(document).bind('keyup', function(key) {
          //detecs whis key was push
          if (key.keyCode == 65) { 
            //this is for stop the coin on function "move_coin"
           stopcoin1 = true;
          } else if (key.keyCode == 88) {
            stopcoin2 = true;
          }
        });
      }
    }, interval);
  });
  

  //stop interval counter and send to function wich start the coin movement
  function begin_game(){
  	$("#show_counter").html("¡Comienza el juego!");
    clearInterval(timing);
    move_coin(player1);
    move_coin(player2);
    $("#start_btn").html("Resetear");
  }

  //animate the coin
  function move_coin(player){
    var currentCell1 = $(player).find(".active").next().addClass("active");
    $(player).find(".active").first().removeClass("active");
    index1 = currentCell1.attr("id");
     
    // stop #Player1 and #Player2 movement
    if(stopcoin1 == true && player == player1){
       
       winner(player);
    } else if(stopcoin2 == true && player == player2){
       winner(player);
    } else if (index1 == 99 || index1 == 199){
      $(player).find(".active").first().removeClass("active");
      $(player).find("td:last-child").addClass("active");
       winner(player);
    } else {
      // this makes the movement
      interval=20;
  

      var timing2 = setTimeout(function() {
        move_coin(player);
      }, interval);
    } 
  }

  function winner(player){
    var finish_line1 = 80;
    var finish_line2 = 180;
    var player_stop1 = 0
    var player_stop2 = 0
    if (index1 <=99 && player == player1){
      player_stop1 = (finish_line1 - index1);

    } else{
      player_stop2 = (finish_line2 - index1);
    }

    winner_print(player_stop1, player_stop2, player, finish_line1, finish_line2);
  }
    

  function winner_print(player_stop1, player_stop2, player, finish_line1, finish_line2){
      console.log(finish_line2 + " en eñ wionner pronto");
    if (player == player1 && index1 >= finish_line1 && index1 <= 99  && player == player2 && index1 >= finish_line2 && index1 <= 199 ){
      $("#show_winner").html("Ambos perdieron!");

    } else if (index1 <=finish_line1 && index1 <=finish_line2){
      $("#show_winner").html("player 1 ganó!");
    } 

    // else if (player_stop1 > player_stop2){
    //     console.log(player_stop1 + "holaaaa");
    //    $("#show_winner").html("player 1 ganó!");
    // } else if(player_stop1 < player_stop2){
    //    $("#show_winner").html("player 2 ganó!");
    // }
     // console.log(player);
     // console.log(index1);
  }

 


  
    
  

}); //end
