import json
from flask import Flask, request
app = Flask(__name__)


#___________________________________Information on all players_________________________________________
playerInfo= {
    "red": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
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
    }
    "blue": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    }
    "black": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0]
    }

}


#___________________________________Run the server_________________________________________
if __name__ == "__main__":
  app.run(host='10.0.1.7', port=5000, debug=True)