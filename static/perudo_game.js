/**
 * Testing commit gmail
 */

/** 
 * To get data for each color of cups I used this system:
 * 
 * RED = 0
 * ORANGE = 1
 * YELLOW = 2
 * GREEN = 3
 * BLUE = 4
 * BLACK = 5
 * 
 * This number is stored in "chosen_color" and is referenced in 2D arrays to get the selected color of dice
 * 
*/
var colors = ["red", "orange", "yellow", "green", "blue", "black"]

//cup images and html objects
var cups = ["red_cup", "orange_cup", "yellow_cup", "green_cup", "blue_cup", "black_cup"]
var cup_colors = ["static/resources/cups/red_cup.png", "static/resources/cups/orange_cup.png", "static/resources/cups/yellow_cup.png", "static/resources/cups/green_cup.png", "static/resources/cups/blue_cup.png", "static/resources/cups/black_cup.png"]
var cup_color_dark = ["static/resources/cups/red_cup_dark.png", "static/resources/cups/orange_cup_dark.png", "static/resources/cups/yellow_cup_dark.png", "static/resources/cups/green_cup_dark.png", "static/resources/cups/blue_cup_dark.png", "static/resources/cups/black_cup_dark.png"]

//red dice images
var red_dice_img = ["static/resources/red_dice/red_1.png", "static/resources/red_dice/red_2.png", "static/resources/red_dice/red_3.png", "static/resources/red_dice/red_4.png", "static/resources/red_dice/red_5.png", "static/resources/red_dice/red_6.png"]
var red_dice_img_dark = ["static/resources/red_dice/red_1dark.png", "static/resources/red_dice/red_2dark.png", "static/resources/red_dice/red_3dark.png", "static/resources/red_dice/red_4dark.png", "static/resources/red_dice/red_5dark.png", "static/resources/red_dice/red_6dark.png"]

//orange dice images
var orange_dice_img = ["static/resources/orange_dice/orange_1.png", "static/resources/orange_dice/orange_2.png", "static/resources/orange_dice/orange_3.png", "static/resources/orange_dice/orange_4.png", "static/resources/orange_dice/orange_5.png", "static/resources/orange_dice/orange_6.png"]
var orange_dice_img_dark = ["static/resources/orange_dice/orange_1dark.png", "static/resources/orange_dice/orange_2dark.png", "static/resources/orange_dice/orange_3dark.png", "static/resources/orange_dice/orange_4dark.png", "static/resources/orange_dice/orange_5dark.png", "static/resources/orange_dice/orange_6dark.png"]

//yellow dice images
var yellow_dice_img = ["static/resources/yellow_dice/yellow_1.png", "static/resources/yellow_dice/yellow_2.png", "static/resources/yellow_dice/yellow_3.png", "static/resources/yellow_dice/yellow_4.png", "static/resources/yellow_dice/yellow_5.png", "static/resources/yellow_dice/yellow_6.png"]
var yellow_dice_img_dark = ["static/resources/yellow_dice/yellow_1dark.png", "static/resources/yellow_dice/yellow_2dark.png", "static/resources/yellow_dice/yellow_3dark.png", "static/resources/yellow_dice/yellow_4dark.png", "static/resources/yellow_dice/yellow_5dark.png", "static/resources/yellow_dice/yellow_6dark.png"]

//green dice images
var green_dice_img = ["static/resources/green_dice/green_1.png", "static/resources/green_dice/green_2.png", "static/resources/green_dice/green_3.png", "static/resources/green_dice/green_4.png", "static/resources/green_dice/green_5.png", "static/resources/green_dice/green_6.png"]
var green_dice_img_dark = ["static/resources/green_dice/green_1dark.png", "static/resources/green_dice/green_2dark.png", "static/resources/green_dice/green_3dark.png", "static/resources/green_dice/green_4dark.png", "static/resources/green_dice/green_5dark.png", "static/resources/green_dice/green_6dark.png"]

//blue dice images
var blue_dice_img = ["static/resources/blue_dice/blue_1.png", "static/resources/blue_dice/blue_2.png", "static/resources/blue_dice/blue_3.png", "static/resources/blue_dice/blue_4.png", "static/resources/blue_dice/blue_5.png", "static/resources/blue_dice/blue_6.png"]
var blue_dice_img_dark = ["static/resources/blue_dice/blue_1dark.png", "static/resources/blue_dice/blue_2dark.png", "static/resources/blue_dice/blue_3dark.png", "static/resources/blue_dice/blue_4dark.png", "static/resources/blue_dice/blue_5dark.png", "static/resources/blue_dice/blue_6dark.png"]

//black dice images
var black_dice_img = ["static/resources/black_dice/black_1.png", "static/resources/black_dice/black_2.png", "static/resources/black_dice/black_3.png", "static/resources/black_dice/black_4.png", "static/resources/black_dice/black_5.png", "static/resources/black_dice/black_6.png"]
var black_dice_img_dark = ["static/resources/black_dice/black_1dark.png", "static/resources/black_dice/black_2dark.png", "static/resources/black_dice/black_3dark.png", "static/resources/black_dice/black_4dark.png", "static/resources/black_dice/black_5dark.png", "static/resources/black_dice/black_6dark.png"]

//holding arrays of dice images
var dice_img = [red_dice_img, orange_dice_img, yellow_dice_img, green_dice_img, blue_dice_img, black_dice_img]
var dice_img_dark = [red_dice_img_dark, orange_dice_img_dark, yellow_dice_img_dark, green_dice_img_dark, blue_dice_img_dark, black_dice_img_dark]

//the id's of the dice objects in html
var red_dice_objects = ["red_die1_img", "red_die2_img", "red_die3_img", "red_die4_img", "red_die5_img"]
var orange_dice_objects = ["orange_die1_img", "orange_die2_img", "orange_die3_img", "orange_die4_img", "orange_die5_img"]
var yellow_dice_objects = ["yellow_die1_img", "yellow_die2_img", "yellow_die3_img", "yellow_die4_img", "yellow_die5_img"]
var green_dice_objects = ["green_die1_img", "green_die2_img", "green_die3_img", "green_die4_img", "green_die5_img"]
var blue_dice_objects = ["blue_die1_img", "blue_die2_img", "blue_die3_img", "blue_die4_img", "blue_die5_img"]
var black_dice_objects = ["black_die1_img", "black_die2_img", "black_die3_img", "black_die4_img", "black_die5_img"]

//holds arrays of dice
var dice_objects = [red_dice_objects, orange_dice_objects, yellow_dice_objects, green_dice_objects, blue_dice_objects, black_dice_objects]

//your own dice numbers
var dice_numbers = [0,0,0,0,0]
//which dice you've selected
var selected_dice = [0,0,0,0,0]

//which dice you've displayed to other players
var displayed_dice = [0,0,0,0,0]

//which color of cup/dice you've chosen
var chosen_color = null;

var game_started = false;
var someone_doubted = false;
//all dice that are hidden from you!
var hidden_dice = [1,1,1,1,1]

//animal names to simulate usernames
var animals = ["Dolphin", "Penguin", "Otter", "Lion", "Bear", "Monkey", "Salmon", "Horse", "Turtle", "Hare", "Giraffe", "Emu"]
var userPicked = false; //this will turn true when the user picks a color and clicks start game


//Betting variables
var count_bet = 1;
var face_bet = 2;

//Dealing with the player's turns 
var players_rank = [-1,-1,-1,-1,-1,-1]
var players_turn_order = []
var session_started_bool = [false,0] //how many times its been started
var host_started_session = false
var previous_turn_color = -1;
var current_turn_color = -1;
var turn_changed = false;

var playerCode = "";
var recievedHost = false; //did you recieve a host, are you the host

var red_dice;
var red_disp;

var orange_dice;
var orange_disp;

var yellow_dice;
var yellow_disp;

var green_dice;
var green_disp;

var blue_dice;
var blue_disp;

var black_dice;
var black_disp;

var dice = [];
var disp = [];

//deadling with the hover effect of the UI pieces
//entering cup objects
document.getElementById("red_cup").onmouseenter = function() {mouseEnter(0)};
document.getElementById("orange_cup").onmouseenter = function() {mouseEnter(1)};
document.getElementById("yellow_cup").onmouseenter = function() {mouseEnter(2)};
document.getElementById("green_cup").onmouseenter = function() {mouseEnter(3)};
document.getElementById("blue_cup").onmouseenter = function() {mouseEnter(4)};
document.getElementById("black_cup").onmouseenter = function() {mouseEnter(5)};
//leaving cup objects with mouse
document.getElementById("red_cup").onmouseleave = function() {mouseLeave(0)};
document.getElementById("orange_cup").onmouseleave = function() {mouseLeave(1)};
document.getElementById("yellow_cup").onmouseleave = function() {mouseLeave(2)};
document.getElementById("green_cup").onmouseleave = function() {mouseLeave(3)};
document.getElementById("blue_cup").onmouseleave = function() {mouseLeave(4)};
document.getElementById("black_cup").onmouseleave = function() {mouseLeave(5)};

//entering and leaving cup objects 
function mouseEnter(num){
    document.getElementById(cups[num]).src = cup_color_dark[num];
}
function mouseLeave(num){
    document.getElementById(cups[num]).src = cup_colors[num];
}

//dealing with hovering actions of buttons on UI (the counter for the bet)
document.getElementById("count_up_button").onmouseenter = function() {countUpEnter()};
document.getElementById("count_up_button").onmouseleave = function() {countUpLeave()};
document.getElementById("count_down_button").onmouseenter = function() {countDownEnter()};
document.getElementById("count_down_button").onmouseleave = function() {countDownLeave()};

document.getElementById("face_up_button").onmouseenter = function() {faceUpEnter()};
document.getElementById("face_up_button").onmouseleave = function() {faceUpLeave()};
document.getElementById("face_down_button").onmouseenter = function() {faceDownEnter()};
document.getElementById("face_down_button").onmouseleave = function() {faceDownLeave()};

function countUpEnter(){
    document.getElementById("count_up_button").src ="static/resources/arrow_up_dark.png";
}
function countUpLeave(){
    document.getElementById("count_up_button").src ="static/resources/arrow_up.png";
}
function countDownEnter(){
    document.getElementById("count_down_button").src ="static/resources/arrow_down_dark.png";
}
function countDownLeave(){
    document.getElementById("count_down_button").src ="static/resources/arrow_down.png";
}

function faceUpEnter(){
    document.getElementById("face_up_button").src ="static/resources/arrow_up_dark.png";
}
function faceUpLeave(){
    document.getElementById("face_up_button").src ="static/resources/arrow_up.png";
}
function faceDownEnter(){
    document.getElementById("face_down_button").src ="static/resources/arrow_down_dark.png";
}
function faceDownLeave(){
    document.getElementById("face_down_button").src ="static/resources/arrow_down.png";
}


//dealing with button hovering (we can't just do hover in CSS because we can onlu hover sometimes)
document.getElementById("display_button").onmouseenter = function() {displayButtonEnter()};
document.getElementById("display_button").onmouseleave = function() {displayButtonLeave()};
function displayButtonEnter(){
    var button_display = document.getElementById("display_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_display.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_display.style.color = "rgb(175,175,175)"
        button_display.onclick = function(){};
    } else { //if it is your turn
        button_display.style.backgroundImage =  "url(/static/resources/blue_pressed.png)";
        button_display.style.color = "white"
        button_display.onclick = function(){displayDice();};
    }
}
function displayButtonLeave(){
    var button_display = document.getElementById("display_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_display.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_display.style.color = "rgb(175,175,175)"
        button_display.onclick = function(){};
    } else { //if it is your turn
        button_display.style.backgroundImage =  "url(/static/resources/blue_button.png)";
        button_display.style.color = "white"
        button_display.onclick = function(){displayDice();};
    }
}

document.getElementById("reroll_button").onmouseenter = function() {rerollButtonEnter()};
document.getElementById("reroll_button").onmouseleave = function() {rerollButtonLeave()};
function rerollButtonEnter(){
    var button_reroll = document.getElementById("reroll_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_reroll.style.backgroundImage =  "url(/static/resources/pink_button_reserved.png)";
        button_reroll.style.color = "rgb(175,175,175)"
        button_reroll.onclick = function(){};
    } else { //if it is your turn
        button_reroll.style.backgroundImage =  "url(/static/resources/pink_pressed.png)";
        button_reroll.style.color = "white"
        button_reroll.onclick = function(){rerollDice();};
    }
}
function rerollButtonLeave(){
    var button_reroll = document.getElementById("reroll_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_reroll.style.backgroundImage =  "url(/static/resources/pink_button_reserved.png)";
        button_reroll.style.color = "rgb(175,175,175)"
        button_reroll.onclick = function(){};
    } else { //if it is your turn
        button_reroll.style.backgroundImage =  "url(/static/resources/pink_button.png)";
        button_reroll.style.color = "white"
        button_reroll.onclick = function(){rerollDice();};
    }
}

document.getElementById("place_bet_button").onmouseenter = function() {place_betButtonEnter()};
document.getElementById("place_bet_button").onmouseleave = function() {place_betButtonLeave()};
function place_betButtonEnter(){
    var button_place_bet = document.getElementById("place_bet_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_place_bet.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_place_bet.style.color = "rgb(175,175,175)"
        button_place_bet.onclick = function(){};
    } else { //if it is your turn
        button_place_bet.style.backgroundImage =  "url(/static/resources/blue_pressed.png)";
        button_place_bet.style.color = "white"
        button_place_bet.onclick = function(){placeBet();};
    }
}
function place_betButtonLeave(){
    var button_place_bet = document.getElementById("place_bet_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_place_bet.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_place_bet.style.color = "rgb(175,175,175)"
        button_place_bet.onclick = function(){};
    } else { //if it is your turn
        button_place_bet.style.backgroundImage =  "url(/static/resources/blue_button.png)";
        button_place_bet.style.color = "white"
        button_place_bet.onclick = function(){placBet();};
    }
}

//update game
function updateGameInterval(){
    setPlayerCode();
    setInterval(updateGame, 500);
}

//update all aspects of game
function updateGame(){
    if(game_started){
        calcProbabilities();
        updateDisplayedDice();
        checkDudo();
        if(session_started_bool[0]){
            start_session();
            // console.log("ROLL BUTTON VBISIBLE>>>>>")
            // document.getElementById("roll_div").visibility = "visible"
        } else if (session_started_bool[1] == 0){
            checkStartSession();
        }
        checkCurrentTurn(); 
    }
    getPos();
    updateCupPos();
    getUsernames();
    if (!recievedHost){ //if you haven't recieved a host yet
        getHost();
    }
}

function setPlayerCode(){
    playerCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    postPlayerCode();
}

function postPlayerCode(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postPlayerCode?id="+ session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "code": playerCode });
    xhr.send(data);
}

function getHost(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            var parsed = JSON.parse(this.responseText);
            if (parsed.host == playerCode){
                document.getElementById("start_session_button").style.visibility = "visible";
                recievedHost = true;
            }
        }
    };
    request.open('GET', "/getHost?id=" + session_id, true);
    request.send();
}

function postPlayerCode(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postPlayerCode?id="+ session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "code": playerCode });
    xhr.send(data);
}

function checkStartSession(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            var parsed = JSON.parse(this.responseText);
            if (parsed.start_session){
                session_started_bool[0] = true;
            }
        }
    };
    request.open('GET', "/getStartSession?id=" + session_id, true);
    request.send();
}

function checkCurrentTurn(){
    //get current turn color
    if(players_turn_order.length != 0){
        getCurrentTurn();
    } 
    //current_turn_color
    //display playing at that person
    if (current_turn_color != -1){
        document.getElementById(colors[current_turn_color] + "_playing_text").style.visibility = "visible";
    }

    if (previous_turn_color != -1){
        document.getElementById(colors[previous_turn_color] + "_playing_text").style.visibility = "hidden";
    }

    //all this stuff makes the buttons appear as non-clickable to people if it isn't their turn
    var button_display = document.getElementById("display_button");
    var button_reroll = document.getElementById("reroll_button");
    var button_bet = document.getElementById("place_bet_button");
    if (current_turn_color != -1 && current_turn_color != chosen_color){ //if its not your turn
        button_display.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_display.style.color = "rgb(175,175,175)"
        button_display.onclick = function(){};

        button_reroll.style.backgroundImage =  "url(/static/resources/pink_button_reserved.png)";
        button_reroll.style.color = "rgb(175,175,175)"
        button_reroll.onclick = function(){};

        button_bet.style.backgroundImage =  "url(/static/resources/blue_button_reserved.png)";
        button_bet.style.color = "rgb(175,175,175)"
        button_bet.onclick = function(){};
    } 
    else if (turn_changed && current_turn_color != previous_turn_color){ //it is your turn
        turn_changed = false;

        button_display.style.backgroundImage =  "url(/static/resources/blue_button.png)";
        button_display.style.color = "white"
        button_display.onclick = function(){displayDice();};

        button_reroll.style.backgroundImage =  "url(/static/resources/pink_button.png)";
        button_reroll.style.color = "white"
        button_reroll.onclick = function(){displayDice();};

        button_bet.style.backgroundImage =  "url(/static/resources/blue_button.png)";
        button_bet.style.color = "white"
        button_bet.onclick = function(){displayDice();};
    }

}

//get the color of the player whos turn it currently is
function getCurrentTurn(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var usernameRequest = new XMLHttpRequest();
    usernameRequest.onreadystatechange = function() {
        if (usernameRequest.readyState == 4 && usernameRequest.status == 200){
            var parsed = JSON.parse(this.responseText);
            if(parsed.current_turn_color != current_turn_color){
                previous_turn_color = current_turn_color; 
                turn_changed = true;    
            }
            current_turn_color = parsed.current_turn_color;
            
        }
    };
    usernameRequest.open('GET', "/getCurrentTurnColor?id=" + session_id, true);
    usernameRequest.send();
}

//organize the player's turns
function orderPlayers(){
    console.log("rank array: " + String(players_rank))
    for (var turn= 0; turn < 6; turn++){
        for(var idx= 0; idx < 6; idx++){
            if(players_rank[idx]==turn){
                players_turn_order.push(idx);
            }
        }
    }
    postTurnOrder();
}

//put turn order into the server
function postTurnOrder(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/postTurnOrder?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "turn_order": players_turn_order });
    xhr.send(data);
}

//start a session
function start_session(){

    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var usernameRequest = new XMLHttpRequest();
    usernameRequest.onreadystatechange = function() {
        if (usernameRequest.readyState == 4 && usernameRequest.status == 200){
            var parsed = JSON.parse(this.responseText);
            var usernames = ["","","","","",""]
            usernames[0] = parsed.allInfo.red.username;
            usernames[1] = parsed.allInfo.orange.username;
            usernames[2] = parsed.allInfo.yellow.username;
            usernames[3] = parsed.allInfo.green.username;
            usernames[4] = parsed.allInfo.blue.username;
            usernames[5] = parsed.allInfo.black.username;
            for (var i = 0; i < 6; i++){
                //delete colors without username
                if (usernames[i] == ""){
                    document.getElementById(String(colors[i])+"_player").style.visibility= 'hidden';
                    for (var j = 0; j < 5; j++){
                        document.getElementById(String(colors[i])+"_die"+String(j+1)+"_img").style.visibility= 'hidden';
                    }
                } else { //store players in array
                    //get rank 
                    var rank = parsed.allInfo[colors[i]].rank;
                    console.log("Ordering player: " + usernames[i] + "rank: " + String(rank))
                    //store colors based on rank and turn
                    players_rank[i] = rank;  
                }
            }
        }
    };
    usernameRequest.open('GET', "/info?id=" + session_id, false);
    usernameRequest.send();

    // console.log("started bool: " + String(session_started_bool[1]))
    document.getElementById("start_session_button").remove();
    document.getElementById("roll_button").style.visibility = 'visible';
    
    postStartSession();
}

function postStartSession(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postStartSession?id="+ session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "color": chosen_color });
    xhr.send(data);


    orderPlayers();
    session_started_bool[0] = false;
    session_started_bool[1] += 1
}

//creates a username for each div when you click a cup and enter a string
function makeUsername(cup_color){//figure out when to call this
    var newUsername = prompt("Enter " + cup_color + " Username") //make usernameSlot in html
    if (newUsername == ""){//only use this if the user input is ""
        var randIndex = Math.floor(Math.random()*animals.length);
        newUsername = cup_color + animals[randIndex]; 
        document.getElementById(cup_color+"Username").innerHTML = newUsername
        animals.splice(randIndex, 1); //pop username from animals, each username only used once
    }
    document.getElementById(cup_color + "Username").innerHTML = newUsername //make usernameBox in html
    postUsername(cup_color); 
}

//put username into server
function postUsername(cup_color){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let postUsernameXhr = new XMLHttpRequest();
    let url = "/postUsername?id=" + session_id;
    postUsernameXhr.open("POST", url, true);
    var colorUsername = cup_color+"Username"
    var data = JSON.stringify({"color": cup_color, 
    "username": document.getElementById(colorUsername).innerText
})
              postUsernameXhr.send(data)       

}

//update the displayed usernames
function getUsernames(){//call this periodically
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var usernameRequest = new XMLHttpRequest();
    usernameRequest.onreadystatechange = function() {
        if (usernameRequest.readyState == 4 && usernameRequest.status == 200){
            var parsed = JSON.parse(this.responseText);
            document.getElementById("redUsername").innerText = parsed.data.red.username
            document.getElementById("orangeUsername").innerText = parsed.data.orange.username
            document.getElementById("yellowUsername").innerText = parsed.data.yellow.username
            document.getElementById("greenUsername").innerText = parsed.data.green.username
            document.getElementById("blueUsername").innerText = parsed.data.blue.username
            document.getElementById("blackUsername").innerText = parsed.data.black.username
        }
    };
    usernameRequest.open('GET', "/getPos?id=" + session_id, true);
    usernameRequest.send();
    
}

function insertCup() {
    let cup_to_move = colors[chosen_color]+"_player"
    let content = document.getElementById(cup_to_move);
    let parent = content.parentNode;
    let colorToSwitch = "initialColorToSwitch"
    let highestRank = -1
    let changed = false;

    colors.forEach(color => {if (document.getElementById(color + "Rank").value > highestRank) {
        highestRank = document.getElementById(color + "Rank").value
    }})

    if (highestRank == -1) {
            colorToSwitch = "red"
    }
    else {
        colors.forEach(color => {if (parseInt(document.getElementById(color + "Pos").value) == parseInt(highestRank) + 1){
        colorToSwitch = color
        changed = true; }
        })

        if (changed ==false){
        colors.forEach(color => {if (parseInt(document.getElementById(color + "Pos").value) == 0){
            colorToSwitch = color}
            })
        }
    }
    let targetCupName = document.getElementById(cup_to_move)
    let otherCupName = document.getElementById(colorToSwitch + "_player")
    if (highestRank == -1) {
        let oldPos = document.getElementById(colors[chosen_color]+"Pos").value  
        let oldPosDesired = document.getElementById(colorToSwitch+"Pos").value  
        parent.insertBefore(targetCupName, otherCupName)
        colors.forEach(color => {
            if (parseInt(document.getElementById(color+"Pos").value) < oldPos && parseInt(document.getElementById(color+"Pos").value) >= oldPosDesired){
                document.getElementById(color+"Pos").value = String(parseInt(document.getElementById(color+"Pos").value) + 1)
            }
        })
        document.getElementById(colors[chosen_color]+"Pos").value = "0"; 
        document.getElementById(colors[chosen_color]+"Rank").value = "0";
    }
    else {
        parent.insertBefore(targetCupName, otherCupName)
        let oldPos = document.getElementById(colors[chosen_color]+"Pos").value    
        document.getElementById(colors[chosen_color]+"Pos").value = document.getElementById(colorToSwitch+"Pos").value; 
        document.getElementById(colors[chosen_color]+"Rank").value = String(parseInt(highestRank) + 1);
        colors.forEach(color => {
            if (parseInt(document.getElementById(color+"Pos").value) < oldPos && parseInt(document.getElementById(color+"Pos").value) >= parseInt(document.getElementById(colorToSwitch+"Pos").value) && color != colors[chosen_color]){
                document.getElementById(color+"Pos").value = String(parseInt(document.getElementById(color+"Pos").value) + 1)
            }
        })
        
    }
    postPos();
}

function insertCupInput(input) {
    let cup_to_move = input+"_player"
    let content = document.getElementById(cup_to_move);
    let parent = content.parentNode;
    let colorToSwitch = "initialColorToSwitch"
    let changed = false;

    colors.forEach(color => {if (parseInt(document.getElementById(color + "Pos").value) == parseInt(document.getElementById(input + "Rank").value)){
    colorToSwitch = color
    changed = true}
    })
    if (changed == true){

        let targetCupName = document.getElementById(cup_to_move)
        let otherCupName = document.getElementById(colorToSwitch + "_player")

        parent.insertBefore(targetCupName, otherCupName)
        let oldPosDesired = document.getElementById(colorToSwitch+"Pos").value
        let oldPos = document.getElementById(input+"Pos").value    
        document.getElementById(input+"Pos").value = document.getElementById(colorToSwitch+"Pos").value;
        if (oldPosDesired < oldPos) {
            colors.forEach(color => {
                if (parseInt(document.getElementById(color+"Pos").value) < oldPos && parseInt(document.getElementById(color+"Pos").value) >= oldPosDesired && color != input){
                    document.getElementById(color+"Pos").value = String(parseInt(document.getElementById(color+"Pos").value) + 1)
                }
            })
        }
        else {
            colors.forEach(color => {
                if (parseInt(document.getElementById(color+"Pos").value) > oldPos && parseInt(document.getElementById(color+"Pos").value) <= oldPosDesired && color != input){
                    document.getElementById(color+"Pos").value = String(parseInt(document.getElementById(color+"Pos").value) - 1)
                }
            })
        }
    }
    else {
    }
    postPos();
}


// function insertAfter(newNode, referenceNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

function updateCupPos(){//call it ever 500 ms, in update function
    //if the cup has a rank, set its position to its rank, 
    let toMove = []
    colors.forEach(color => {if (document.getElementById(color + "Pos").value != document.getElementById(color + "Rank").value && document.getElementById(color + "Rank").value != "-1"){
        toMove.push(color)
    }})

    //sort the colors in tomove by their current position
    let colorRanks = ["none", "none", "none", "none", "none", "none"]
    for (i = 0; i < toMove.length; i ++){
        colorRanks[parseInt(document.getElementById(toMove[i] + "Pos").value)] = toMove[i]
    }
    colorRanks.forEach( color => {
        if (color != "none"){
            insertCupInput(color)
        }
    })

    toMove.forEach( color => {
        insertCupInput(color)
    })
}

//get position of all the cup divs
function getPos(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var rankRequest = new XMLHttpRequest();
    rankRequest.onreadystatechange = function() {
        if (rankRequest.readyState == 4 && rankRequest.status == 200){
            var parsed = JSON.parse(this.responseText);
            // document.getElementById("redPos").value = parsed.data.red.pos
            // document.getElementById("orangePos").value = parsed.data.orange.pos
            // document.getElementById("yellowPos").value = parsed.data.yellow.pos
            // document.getElementById("greenPos").value = parsed.data.green.pos
            // document.getElementById("bluePos").value = parsed.data.blue.pos
            // document.getElementById("blackPos").value = parsed.data.black.pos

            document.getElementById("redRank").value = parsed.data.red.rank
            document.getElementById("orangeRank").value = parsed.data.orange.rank
            document.getElementById("yellowRank").value = parsed.data.yellow.rank
            document.getElementById("greenRank").value = parsed.data.green.rank
            document.getElementById("blueRank").value = parsed.data.blue.rank
            document.getElementById("blackRank").value = parsed.data.black.rank
        }
    };rankRequest.open('GET', "/getPos?id=" + session_id, true);
    rankRequest.send();
    
}

//put cup div positions into the server
function postPos() {
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let postPosXhr = new XMLHttpRequest();
    let url = "/postPos?id=" + session_id;

    var data = JSON.stringify({"redRank": document.getElementById("redRank").value,
    "orangeRank": document.getElementById("orangeRank").value,
    "yellowRank": document.getElementById("yellowRank").value,
    "greenRank": document.getElementById("greenRank").value,
    "blueRank": document.getElementById("blueRank").value,
    "blackRank": document.getElementById("blackRank").value
   });
    
    // var data = JSON.stringify({"redPos": document.getElementById("redPos").value,
    //                          "orangePos": document.getElementById("orangePos").value,
    //                          "yellowPos": document.getElementById("yellowPos").value,
    //                          "greenPos": document.getElementById("greenPos").value,
    //                          "bluePos": document.getElementById("bluePos").value,
    //                          "blackPos": document.getElementById("blackPos").value
    //                         });
                            postPosXhr.open("POST", url, true);
                            postPosXhr.send(data)               
}

//update displayed dice for each player
function updateDisplayedDice(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            var parsed = JSON.parse(this.responseText);
            red_dice = parsed.data.red.dice;
            red_disp = parsed.data.red.disp;

            orange_dice = parsed.data.orange.dice;
            orange_disp = parsed.data.orange.disp;

            yellow_dice = parsed.data.yellow.dice;
            yellow_disp = parsed.data.yellow.disp;

            green_dice = parsed.data.green.dice;
            green_disp = parsed.data.green.disp;

            blue_dice = parsed.data.blue.dice;
            blue_disp = parsed.data.blue.disp;

            black_dice = parsed.data.black.dice;
            black_disp = parsed.data.black.disp;

            dice = [red_dice, orange_dice, yellow_dice, green_dice, blue_dice, black_dice];
            disp = [red_disp, orange_disp, yellow_disp, green_disp, blue_disp, black_disp];

            for (var color = 0; color < 6; color++){
                for (var dice_num = 0; dice_num < 5; dice_num++){
                    if (disp[color][dice_num] === 1){
                        if(color != chosen_color){
                            document.getElementById(dice_objects[color][dice_num]).src = dice_img[color][dice[color][dice_num]-1];
                        } 
                    }
                }
            }
            

        }
    };
    request.open('GET', "/getDisplayed?id=" + session_id, true);
    request.send();
}

//displays your dice to yourself
function rollDice(){

    for(var i = 0; i < 5; i++){
        dice_numbers[i] = Math.ceil(Math.random()*6);
        hidden_dice[i] = 0;
        document.getElementById(dice_objects[chosen_color][i]).src= dice_img[chosen_color][dice_numbers[i]-1];
    }
    document.getElementById("roll_button").remove();
    document.getElementById("display_button").style.visibility = 'visible';
    document.getElementById("reroll_button").style.visibility = 'visible';
    document.getElementById("dudo_button").style.visibility = 'visible';
    document.getElementById("betting_div").style.visibility = 'visible';
    document.getElementById("place_bet_button").style.visibility = 'visible';
    document.getElementById("betting_div").style.visibility = 'visible';
    document.getElementById("place_bet_button").style.visibility = 'visible';
    //send dice nums to server
    post_dice_nums();

    document.getElementById(colors[chosen_color]+"_die1_img").onmouseenter = function() {dieEnter(1)};
    document.getElementById(colors[chosen_color]+"_die2_img").onmouseenter = function() {dieEnter(2)};
    document.getElementById(colors[chosen_color]+"_die3_img").onmouseenter = function() {dieEnter(3)};
    document.getElementById(colors[chosen_color]+"_die4_img").onmouseenter = function() {dieEnter(4)};
    document.getElementById(colors[chosen_color]+"_die5_img").onmouseenter = function() {dieEnter(5)};
    function dieEnter(num){
        if(hidden_dice[num-1] == 0){
            document.getElementById(colors[chosen_color]+"_die"+String(num)+"_img").src = dice_img_dark[chosen_color][dice_numbers[num-1]-1];
        }   
    }
    document.getElementById(colors[chosen_color]+"_die1_img").onmouseleave = function() {dieLeave(1)};
    document.getElementById(colors[chosen_color]+"_die2_img").onmouseleave = function() {dieLeave(2)};
    document.getElementById(colors[chosen_color]+"_die3_img").onmouseleave = function() {dieLeave(3)};
    document.getElementById(colors[chosen_color]+"_die4_img").onmouseleave = function() {dieLeave(4)};
    document.getElementById(colors[chosen_color]+"_die5_img").onmouseleave = function() {dieLeave(5)};
    function dieLeave(num){
        if (selected_dice[num-1]==0 && hidden_dice[num-1] == 0){
            document.getElementById(colors[chosen_color]+"_die"+String(num)+"_img").src = dice_img[chosen_color][dice_numbers[num-1]-1];
        }
    }


}

//post all of your own dice nums to the server
function post_dice_nums(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/postNums?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "color": chosen_color, "dice_nums": dice_numbers });
    xhr.send(data);
}

function calcProbabilities() { 

    diceFaces = [0,0,0,0,0,0,0] //diceFaces[1] = number of ones, etc. diceFaces[0] = number of unknown dice
    //dice_numbers holds data as [1,2,3,4,5], need to check only the dice which are not hiddden from you, 1 in a spot means that dice is hidden
    for (index in dice_numbers) {
        if (hidden_dice[index] == 0) {
            diceFaces[dice_numbers[index]] = parseInt(diceFaces[dice_numbers[index]]) + 1
        }
        else if (hidden_dice[index] == 1 && hidden_dice[index] != -1){
            diceFaces[0] = parseInt(diceFaces[0]) + 1
        }
    }

    for (i = 0; i< 6; i++){
        if (colors[i] != colors[chosen_color]) {
            for (j = 0; j <6; j++) {
                if (disp[i] != undefined && disp[i][j] == 1) {
                    diceFaces[dice[i][j]] = parseInt(diceFaces[dice[i][j]]) + 1
                }
                else if (disp[i] != undefined && dice[i][j] != 0 && dice[i][j] != undefined && dice[i][j] != -1){
                    diceFaces[0] = parseInt(diceFaces[0]) + 1
                }
            }
        }
    } 

    let faceDice = parseInt(document.getElementById("face_number").innerHTML)
    let numDice = parseInt(document.getElementById("count_number").innerHTML)
    let probability; 
    let prevFaceDice = parseInt(document.getElementById("prev_face_num").innerHTML)
    let prevNumDice = parseInt(document.getElementById("prev_count_num").innerHTML)
    let prevProbability;
    let knownDice; 
    let prevKnownDice;
    if (faceDice == 1){
        knownDice = diceFaces[1]
    }
    else {
        knownDice = diceFaces[faceDice] + diceFaces[1]
    }
    if (prevFaceDice == 1){
        prevKnownDice = diceFaces[1]
    }
    else {
        prevKnownDice = diceFaces[prevFaceDice] + diceFaces[1]
    }
    let unknownDice = diceFaces[0]
    let diceNeeded = numDice - knownDice
    let prevDiceNeeded = prevNumDice - prevKnownDice
    if (diceNeeded <= 0){
        probability = 100; 
    }
    else if (diceNeeded > unknownDice) {
        probability = 0;
    }
    else if (faceDice != 1){
        probability = 100;
        for (i=0; i< diceNeeded; i++){
            probability = probability - 100*binomial(unknownDice, i)*Math.pow(1/3, i)*Math.pow(2/3, unknownDice-i)
            probability = (Math.round(probability * 100) / 100).toFixed(1)
        }
    }
    else{
        probability = 100;
        for (i=0; i< diceNeeded; i++){
            probability = probability - 100*binomial(unknownDice, i)*Math.pow(1/6, i)*Math.pow(5/6, unknownDice-i)
            probability = (Math.round(probability * 100) / 100).toFixed(1)
        }
        }


    if (prevDiceNeeded <= 0){
        prevProbability = 100; 
    }
    else if (prevDiceNeeded > unknownDice) {
        prevProbability = 0;
    }
    else if (faceDice != 1){
        prevProbability = 100;
        for (i=0; i< prevDiceNeeded; i++){
            prevProbability = prevProbability - 100*binomial(unknownDice, i)*Math.pow(1/3, i)*Math.pow(2/3, unknownDice-i)
        }
        prevProbability = (Math.round(prevProbability * 100) / 100).toFixed(1)
    }
    else{
        prevProbability = 100;
        for (i=0; i< prevDiceNeeded; i++){
            prevProbability = prevProbability - 100*binomial(unknownDice, i)*Math.pow(1/5, i)*Math.pow(5/6, unknownDice-i)
        }
        prevProbability = (Math.round(prevProbability * 100) / 100).toFixed(1)
    }
    document.getElementById("prob_yours_num").innerHTML = probability;
    document.getElementById("prob_prev_num").innerHTML = prevProbability;
}

function binomial(n, k) {
    if ((typeof n !== 'number') || (typeof k !== 'number')) 
 return false; 
   var coeff = 1;
   for (var x = n-k+1; x <= n; x++) coeff *= x;
   for (x = 1; x <= k; x++) coeff /= x;
   return coeff;
}

//when you click on one of your own dice
function clicked_die(color, num){
    if(color == chosen_color){
        if(selected_dice[num-1] == 0 && hidden_dice[num-1] == 0){  //if the die has not been selected
            document.getElementById(dice_objects[chosen_color][num-1]).src = dice_img_dark[chosen_color][dice_numbers[num-1]-1];
            selected_dice[num-1] = 1;
        } else if (hidden_dice[num-1] == 0) {  //if the die is already selected
            document.getElementById(dice_objects[chosen_color][num-1]).src =dice_img[chosen_color][dice_numbers[num-1]-1];
            selected_dice[num-1] = 0;
        } 
    } 
}

//when you click on a colored cup
function clicked_cup(num){
    if (document.getElementById(colors[num]+"Rank").value == "-1" && userPicked == false){//if the clicked cup does not have a rank, then proceed
        if (chosen_color != null && chosen_color != num){ //if you select a new color
            document.getElementById(cups[chosen_color]).src= cup_colors[chosen_color];
        }
        chosen_color = num;
        document.getElementById(cups[chosen_color]).src= cup_color_dark[chosen_color];
        document.getElementById("enter_round_button").style.visibility = 'visible';
    }
}

//begins game. Shows all dice as peaches ;)
function enterRound(){
    game_started = true;
    insertCup();//this function moves the cup when you click them. Has been disabled until further notice
    serverGameStart();
    for (var j = 0; j < 6; j++){
        for (var i = 0; i < 5; i++){
            document.getElementById(dice_objects[j][i]).style.visibility = 'visible';
        }
    }
    document.getElementById("enter_round_button").remove();
    // document.getElementById("roll_button").style.visibility = 'visible';
    userPicked = true; 
    makeUsername(colors[chosen_color])
    document.getElementById(String(colors[chosen_color])+"_user_pic").src = "/static/"+String(colors[chosen_color])+"_user_crown.png";
    document.getElementById(String(colors[chosen_color])+"Username").style.marginTop = "5px"
    
}

//tell server that the game has started
function serverGameStart(){ //push information to the server
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/gameStart?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "color": chosen_color});
    xhr.send(data);
}

//send selected dice to the server
function displayDice(){
    for (var i = 0; i < 5; i++){
        displayed_dice[i] = selected_dice[i];
    }
    //send displayed array to server
    post_displayed_dice();
}

//POST selected dice to the server
function post_displayed_dice(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/postDisplayed?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify(
        {   "color": chosen_color, 
            "displayed": displayed_dice }
        );
    xhr.send(data);
}

//when the player selects dice to reroll, we automatically display all other dice to other players, 
//reroll the selected dice, and then hide those rerolled dice
function rerollDice(){
    for (var i = 0; i < 5; i++){
        if (selected_dice[i] == 1){
            hidden_dice[i] = 1;
            dice_numbers[i] = Math.ceil(Math.random()*6);
            document.getElementById(dice_objects[chosen_color][i]).src= "/static/resources/peach.png";
        }
    }
    post_dice_nums();
    //make displayed dice array opposite
    for (var j = 0; j < 5; j++){
        if (selected_dice[j] == 0) {
            selected_dice[j] = 1;
        } else {
            selected_dice[j] = 0;
        }
    }
    //display dice
    displayDice();

    //deselect all dice
    for (var j = 0; j < 5; j++){
        selected_dice[j] = 0;
    }
    


}

//when someone wants to doubt
function dudo() {
    /*
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];

    // TODO add session id to url below

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('dudoMessage').innerHTML = 'success ' + this.responseText;
        } else {
            document.getElementById('dudoMessage').innerHTML = 'fail ' + this.responseText;
        }
    };

    xhttp.open("GET", "/dudo?cup=" + chosen_color, true);
    xhttp.send();
    */

    //set doubt in server to true
    console.log("DOUBTING");
    postDoubt();


}

//tell the server that someone doubted
function postDoubt(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/postDoubt?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify(
        {   "color": chosen_color }
        );
    xhr.send(data);
}

//see if anyone has doubted!
function checkDudo(){
    //check if doubt is true
    getDoubt();
    //display ALL dice if true
    if (someone_doubted){
        selected_dice = [1,1,1,1,1];
        displayDice();
    }
}

//see if anyone has doubted
function getDoubt(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            var parsed = JSON.parse(this.responseText);
            someone_doubted = parsed.data;
        }
    };request.open('GET', "/getDoubt?id=" + session_id, true);
    request.send();
}

//increase the count number
function count_up(){
    document.getElementById("count_number").innerHTML = String(count_bet + 1);
    count_bet = count_bet + 1;
    
}

//decrease the count number
function count_down(){
    if (count_bet > 1){
        document.getElementById("count_number").innerHTML = String(count_bet - 1);
        count_bet = count_bet - 1;
    }
}

//increase the face number
function face_up(){
    if (face_bet <= 5){
        document.getElementById("face_number").innerHTML = String(face_bet + 1);
        face_bet = face_bet + 1;
    }
}

//decrease the face number
function face_down(){
    if (face_bet > 1){
        document.getElementById("face_number").innerHTML = String(face_bet - 1);
        face_bet = face_bet -1;
    }
}

function placeBet(){
    postNextTurn();
}

function postNextTurn(){
    let session_id = document.getElementById("game_id_display").innerHTML.split(': ')[1];
    let xhr = new XMLHttpRequest();
    let url = "/postNextTurn?id=" + session_id; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "color": chosen_color});
    xhr.send(data);
}
