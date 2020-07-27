import json
from flask import Flask, request
app = Flask(__name__)

#make a server code to login to the game (have multiple sessions)
#entering a name/ username per cup
 

#USING DIFF SERVER PYTHON STUFF


#cheeky round!
    #disable increasing face num
#we have to get rid of dice
    #losing -> gray 



#militsa 
    #dudo button
        #says who clicked it 
    #exacto button
        #only available to a few people 
    #paste in example get and example post

#michelle is the best
    #display dice and reroll dice 

#peter
    #make cups go in order 
        #all cups are blank 
        #assign color
    #probability counter
    #obvious whos turn it is 
        #opacity background highlights current player
    #we need a way to make a bet
        #input boxes with only increasing steps unless converting to ones (With a conversion button)


#___________________________________Information on all players_________________________________________
playerInfo= {
    "red": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
        # store next player
        #maybe make the displayed/dice nums = -1 when they lose a die
    },
    "orange": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    },
    "yellow": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    },
    "green": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    },
    "blue": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    },
    "black": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    }

    #current bet

}


#___________________________________Run the server_________________________________________
if __name__ == "__main__":
  app.run(host='10.0.1.7', port=5000, debug=True)