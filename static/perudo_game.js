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
//all dice that are hidden from you!
var hidden_dice = [0,0,0,0,0]

//animal names to simulate usernames
var animals = ["Dolphin", "Penguin", "Otter", "Lion", "Bear", "Monkey", "Salmon", "Horse", "Turtle", "Hare", "Giraffe", "Emu"]
var userPicked = false; //this will turn true when the user picks a color and clicks start game

var currentBet = 0;
var TurnToBet = 0;

//update all the dice on the table
function updateGameInterval(){
    setInterval(updateDisplayedDice, 500);
    setInterval(getPos, 500);
    setInterval(postPos, 500);
    setInterval(updateCupPos, 500);
    setInterval(getUsernames, 500);
}

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

function postUsername(cup_color){
    let postUsernameXhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postUsername/";
    postUsernameXhr.open("POST", url, true);
    var colorUsername = cup_color+"Username"
    var data = JSON.stringify({"color": cup_color, 
    "username": document.getElementById(colorUsername).innerText
})
              postUsernameXhr.send(data)       

}

function getUsernames(){//call this periodically
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
};usernameRequest.open('GET', "/getPos/", true);
    usernameRequest.send();
    
}


//the divs will hold their ranks
function insertCup(cup_to_move) {
    console.log("INSERT CUP ENGAGED")
    console.log("colors[chosen_color] + Rank =" + colors[chosen_color]+"Rank")
    getPos();
    if (document.getElementById(colors[chosen_color]+"Rank").value == "-1" && userPicked == false){//if the clicked cup does not have a rank, then proceed
        var content = document.getElementById(cup_to_move);
        var parent = content.parentNode;
        var highestRank = parseInt(-1)
        // getPos();
        colors.forEach(color => console.log(color + "rank =" + document.getElementById(color + "Rank").value))
        colors.forEach(color => {if (document.getElementById(color + "Rank").value > highestRank) {
            highestRank = document.getElementById(color + "Rank").value
        }})
        console.log("HIGHEST RANK = " + String(highestRank))
        if (highestRank == -1){
            console.log("ENTERED IF")
            parent.insertBefore(content, parent.childNodes[0])
        }
        else {
        console.log("highestrank + 1 = " + String(parseInt(highestRank + 1)))
        parent.insertBefore(content, parent.childNodes[parseInt(highestRank + 1)])
        }
    }
}

function updateCupPos(){//call it ever 500 ms, in update function
    //if the cup has a rank, set its position to its rank, 
    var parent= document.getElementById("red_player").parentNode; //use any cup to get it's parent
    let toMove = []
    colors.forEach(color => {if (document.getElementById(color + "Pos").value != document.getElementById(color + "Rank").value && document.getElementById(color + "Rank").value != -1){
        toMove.push(color)
    }})
    toMove.forEach(color => parent.insertBefore(document.getElementById(color + "_player"), parent.childNodes[document.getElementById(color + "Rank").value]))
}

function getPos(){
    var rankRequest = new XMLHttpRequest();
    rankRequest.onreadystatechange = function() {
    if (rankRequest.readyState == 4 && rankRequest.status == 200){
        var parsed = JSON.parse(this.responseText);
        document.getElementById("redPos").value = parsed.data.red.pos
        document.getElementById("orangePos").value = parsed.data.orange.pos
        document.getElementById("yellowPos").value = parsed.data.yellow.pos
        document.getElementById("greenPos").value = parsed.data.green.pos
        document.getElementById("bluePos").value = parsed.data.blue.pos
        document.getElementById("blackPos").value = parsed.data.black.pos

        document.getElementById("redRank").value = parsed.data.red.rank
        document.getElementById("orangeRank").value = parsed.data.orange.rank
        document.getElementById("yellowRank").value = parsed.data.yellow.rank
        document.getElementById("greenRank").value = parsed.data.green.rank
        document.getElementById("blueRank").value = parsed.data.blue.rank
        document.getElementById("blackRank").value = parsed.data.black.rank
    }
};rankRequest.open('GET', "/getPos/", true);
    rankRequest.send();
    
}

function postPos() {
    let postPosXhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postPos/";
    postPosXhr.open("POST", url, true);
    var data = JSON.stringify({"redPos": document.getElementById("redPos").value,
                             "orangePos": document.getElementById("orangePos").value,
                             "yellowPos": document.getElementById("yellowPos").value,
                             "greenPos": document.getElementById("greenPos").value,
                             "bluePos": document.getElementById("bluePos").value,
                             "blackPos": document.getElementById("blackPos").value
})
              postPosXhr.send(data)               
}

function updateDisplayedDice(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            var parsed = JSON.parse(this.responseText);
            var red_dice = parsed.data.red.dice;
            var red_disp = parsed.data.red.disp;

            var orange_dice = parsed.data.orange.dice;
            var orange_disp = parsed.data.orange.disp;

            var yellow_dice = parsed.data.yellow.dice;
            var yellow_disp = parsed.data.yellow.disp;

            var green_dice = parsed.data.green.dice;
            var green_disp = parsed.data.green.disp;

            var blue_dice = parsed.data.blue.dice;
            var blue_disp = parsed.data.blue.disp;

            var black_dice = parsed.data.black.dice;
            var black_disp = parsed.data.black.disp;

            var dice = [red_dice, orange_dice, yellow_dice, green_dice, blue_dice, black_dice];
            var disp = [red_disp, orange_disp, yellow_disp, green_disp, blue_disp, black_disp];

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
    request.open('GET', "/getDisplayed/", true);
    request.send();
}

//displays your dice to yourself
function rollDice(){

    for(var i = 0; i < 5; i++){
        dice_numbers[i] = Math.ceil(Math.random()*6);
        document.getElementById(dice_objects[chosen_color][i]).src= dice_img[chosen_color][dice_numbers[i]-1];
    }
    document.getElementById("roll_button").style.visibility = 'hidden';
    //send dice nums to server
    post_dice_nums();


}

//post all of your own dice nums to the server
function post_dice_nums(){
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postNums/"; 
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "color": chosen_color, "dice_nums": dice_numbers });
    xhr.send(data);
}

//when you click on one of your own dice
function clicked_die(num){
    if(selected_dice[num-1] == 0 && hidden_dice[num-1] == 0){  //if the die has not been selected
        document.getElementById(dice_objects[chosen_color][num-1]).src = dice_img_dark[chosen_color][dice_numbers[num-1]-1];
        selected_dice[num-1] = 1;
    } else if (hidden_dice[num-1] == 0) {  //if the die is already selected
        document.getElementById(dice_objects[chosen_color][num-1]).src =dice_img[chosen_color][dice_numbers[num-1]-1];
        selected_dice[num-1] = 0;
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
        document.getElementById("start_button").style.visibility = 'visible';
    }
}

//begins game. Shows all dice as peaches ;)
function startGame(){
    serverGameStart();
    for (var j = 0; j < 6; j++){
        for (var i = 0; i < 5; i++){
            document.getElementById(dice_objects[j][i]).style.visibility = 'visible';
        }
    }
    document.getElementById("start_button").style.visibility = 'hidden';
    document.getElementById("roll_button").style.visibility = 'visible';
    document.getElementById("display_button").style.visibility = 'visible';
    document.getElementById("reroll_button").style.visibility = 'visible';
    document.getElementById("dudo_button").style.visibility = 'visible';
    userPicked = true; 
    console.log("making username for " + chosen_color)
    makeUsername(colors[chosen_color])
    //TODO: send dice info to server
}

function serverGameStart(){ //push information to the server
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/gameStart/"; 
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
    let xhr = new XMLHttpRequest();
    let url = "http://0.0.0.0:5000/postDisplayed/"; 
    xhr.open("POST", url, true);
    var data = JSON.stringify(
        {   "color": chosen_color, 
            "displayed": displayed_dice }
        );
    xhr.send(data);
}

function rerollDice(){
    //TOOD: reroll and hide all dice selected
    for (var i = 0; i < 5; i++){
        if (selected_dice[i] == 1){
            hidden_dice[i] = 1;
            dice_numbers[i] = Math.ceil(Math.random()*6);
            document.getElementById(dice_objects[chosen_color][i]).src= "/static/resources/peach.png";
        }
    }
    post_dice_nums();
    //TODO: display all dice not selected
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
    


}

function dudo() {
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
}
