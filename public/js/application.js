$(document).on('ready', function() {
  counter = 3;
  timing = null;
  playerA = ""
  playerB = ""
  player1 = "Player1";
  player2 = "Player2";
  stopcoin1 = false;
  stopcoin2 = false;
  interval = 1000;
  // diference1 = false;
  // diference2 = false;
  position1 = "0";
  position2 = "0";
  winnerPlayer ="";

  $( "#login" ).on("submit", function(event) {
      event.preventDefault();
      var playersInput = $(this).serialize(); 
      $.post("/game", playersInput, function(data) {
        $("#game").html(data);
      });

  }); 

 

  //When click button start the counter
  $(document).on("click","#start_btn", function(){
    //event.preventDefault();
    //counter show on view and later go to 'begin_game' funtion or send values to 'move_coin' 
    playerA = $("input[name=player1]").val();
    playerB = $("input[name=player2]").val();
    timing = setInterval(function() {
      if (counter != 0){
        $("#show_counter").html(counter);
        counter--;
      } else {
        begin_game();
        $(document).bind('keyup', function(key) {
          //detecs whis key was push
          if (key.keyCode == 65) { 
           stopcoin1 = true;
          } else if (key.keyCode == 88) {
            stopcoin2 = true;
          }
        });
      }
    }, interval);
  });
   


}); //end  
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
    var current_td = $("#" + player).find(".active").next().addClass("active");
    $("#" + player).find(".active").first().removeClass("active");
    var index = current_td.attr("id");
   
     
    // stop #Player1 and #Player2 movement
    if(stopcoin1 == true && player == player1 || player == player1 && index == "99"){
       winner(player1, index);
       //console.log("hola1");
    } else if(stopcoin2 == true && player == player2 || index == "99" ){
       winner(player2, index);
       //console.log("hola2");
    }  
    else {
      // this makes the movement
      interval=20;
      var timing2 = setTimeout(function() {
        move_coin(player);
      }, interval);
    } 
  }

  function winner(player, index){
    var finish_line = "80";
    if (player == player1 ){
      if (index <= finish_line) {
        position1 = index;
        winnerPlayer = player; 
      } else {
        position1 = "99";
      } 
    } else {
        if (index <= finish_line) {
          position2 = index;
          winnerPlayer = player;  
        } else {
          position2 = "99";
        }
    }
   // console.log("player 1 "+ position1);
   // console.log("player 2 "+ position2);
    messages(position1, position2, winnerPlayer);
  }
   
  function messages(position1, position2, winnerPlayer){
    if (position1 == "99" && position2 == "99"){
      $("#show_winner").html("ambos perdieron ");
    } else if (position1 > position2 && winnerPlayer == "Player1"){
      $("#show_winner").html(winnerPlayer);
    } else if (position2 > position1 && winnerPlayer == "Player2"){
      $("#show_winner").html(winnerPlayer);
    }  else if ( position1 == position2){
      $("#show_winner").html("Empate");
    } 

  
  
  $.post("/create_results", {player1: playerA, player2: playerB,} )

    
  }


