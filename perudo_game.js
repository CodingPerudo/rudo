/**
 * Testing commit
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


//cup images and html objects
var cups = ["red_cup", "orange_cup", "yellow_cup", "green_cup", "blue_cup", "black_cup"]
var cup_colors = ["cups/red_cup.png", "cups/orange_cup.png", "cups/yellow_cup.png", "cups/green_cup.png", "cups/blue_cup.png", "cups/black_cup.png"]
var cup_color_dark = ["cups/red_cup_dark.png", "cups/orange_cup_dark.png", "cups/yellow_cup_dark.png", "cups/green_cup_dark.png", "cups/blue_cup_dark.png", "cups/black_cup_dark.png"]

//red dice images
var red_dice_img = ["red_dice/red_1.png", "red_dice/red_2.png", "red_dice/red_3.png", "red_dice/red_4.png", "red_dice/red_5.png", "red_dice/red_6.png"]
var red_dice_img_dark = ["red_dice/red_1dark.png", "red_dice/red_2dark.png", "red_dice/red_3dark.png", "red_dice/red_4dark.png", "red_dice/red_5dark.png", "red_dice/red_6dark.png"]

//orange dice images
var orange_dice_img = ["orange_dice/orange_1.png", "orange_dice/orange_2.png", "orange_dice/orange_3.png", "orange_dice/orange_4.png", "orange_dice/orange_5.png", "orange_dice/orange_6.png"]
var orange_dice_img_dark = ["orange_dice/orange_1dark.png", "orange_dice/orange_2dark.png", "orange_dice/orange_3dark.png", "orange_dice/orange_4dark.png", "orange_dice/orange_5dark.png", "orange_dice/orange_6dark.png"]

//yellow dice images
var yellow_dice_img = ["yellow_dice/yellow_1.png", "yellow_dice/yellow_2.png", "yellow_dice/yellow_3.png", "yellow_dice/yellow_4.png", "yellow_dice/yellow_5.png", "yellow_dice/yellow_6.png"]
var yellow_dice_img_dark = ["yellow_dice/yellow_1dark.png", "yellow_dice/yellow_2dark.png", "yellow_dice/yellow_3dark.png", "yellow_dice/yellow_4dark.png", "yellow_dice/yellow_5dark.png", "yellow_dice/yellow_6dark.png"]

//green dice images
var green_dice_img = ["green_dice/green_1.png", "green_dice/green_2.png", "green_dice/green_3.png", "green_dice/green_4.png", "green_dice/green_5.png", "green_dice/green_6.png"]
var green_dice_img_dark = ["green_dice/green_1dark.png", "green_dice/green_2dark.png", "green_dice/green_3dark.png", "green_dice/green_4dark.png", "green_dice/green_5dark.png", "green_dice/green_6dark.png"]

//blue dice images
var blue_dice_img = ["blue_dice/blue_1.png", "blue_dice/blue_2.png", "blue_dice/blue_3.png", "blue_dice/blue_4.png", "blue_dice/blue_5.png", "blue_dice/blue_6.png"]
var blue_dice_img_dark = ["blue_dice/blue_1dark.png", "blue_dice/blue_2dark.png", "blue_dice/blue_3dark.png", "blue_dice/blue_4dark.png", "blue_dice/blue_5dark.png", "blue_dice/blue_6dark.png"]

//black dice images
var black_dice_img = ["black_dice/black_1.png", "black_dice/black_2.png", "black_dice/black_3.png", "black_dice/black_4.png", "black_dice/black_5.png", "black_dice/black_6.png"]
var black_dice_img_dark = ["black_dice/black_1dark.png", "black_dice/black_2dark.png", "black_dice/black_3dark.png", "black_dice/black_4dark.png", "black_dice/black_5dark.png", "black_dice/black_6dark.png"]

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
var dice_clicked = [0,0,0,0,0]

//which dice you've displayed to other players
var displayed_dice = [0,0,0,0,0]

//which color of cup/dice you've chosen
var chosen_color = null;

//displays your dice to yourself
function rollDice(){

    for(var i = 0; i < 5; i++){
        dice_numbers[i] = Math.ceil(Math.random()*6);
        document.getElementById(dice_objects[chosen_color][i]).src= dice_img[chosen_color][dice_numbers[i]-1];
    }
    document.getElementById("roll_button").style.visibility = 'hidden';

}

//when you click on one of your own dice
function clicked_die(num){
    if(dice_clicked[num-1] == 0){  //if the die has not been selected
        document.getElementById(dice_objects[chosen_color][num-1]).src = dice_img_dark[chosen_color][dice_numbers[num-1]-1];
        dice_clicked[num-1] = 1;
    } else {  //if the die is already selected
        document.getElementById(dice_objects[chosen_color][num-1]).src =dice_img[chosen_color][dice_numbers[num-1]-1];
        dice_clicked[num-1] = 0;
    }  
}

//when you click on a colored cup
function clicked_cup(num){
    console.log("chosen: " + chosen_color)
    if (chosen_color != null && chosen_color != num){ //if you select a new color
        document.getElementById(cups[chosen_color]).src= cup_colors[chosen_color];
    }
    chosen_color = num;
    document.getElementById(cups[chosen_color]).src= cup_color_dark[chosen_color];
    document.getElementById("start_button").style.visibility = 'visible';
}

//begins game. Shows all dice as peaches ;)
function startGame(){
    for (var j = 0; j < 6; j++){
        for (var i = 0; i < 5; i++){
            document.getElementById(dice_objects[j][i]).style.visibility = 'visible';
        }
    }
    document.getElementById("start_button").style.visibility = 'hidden';
    document.getElementById("roll_button").style.visibility = 'visible';
    //TODO: send dice info to server
}


function displayDice(){
    //TODO: display selected dice to other players
}

function rerollDice(){
    //TODO: display all dice not selected
    //TOOD: reroll and hide all dice selected
}

