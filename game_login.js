
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem("Player1" , player_1);
    localStorage.setItem("Player2" , player_2);
    
    window.location = "game_page.html";
}

