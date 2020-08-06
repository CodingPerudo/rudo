import json
from flask import Flask, request
import string
import random
# from flask import render_template

app = Flask(__name__)

#make a server code to login to the game (have multiple sessions)
#entering a name/ username per cup


#USING DIFF SERVER PYTHON STUFF


#cheeky round!
    #disable increasing face num
#we have to get rid of dice
    #losing -> gray

#shift everything to the middle of the screen more
#because it looks ew rn and imma forget to do it if i dont write it down

#militsa
    #dudo button
        #says who clicked it
    #exacto button
        #only available to a few people
    #paste in example get and example post

#michelle is not the best
    #display dice and reroll dice

#peter
    #make cups go in order (DONE)
    #make usernames (in progress)
    #probability counter
    #obvious whos turn it is
        #opacity background highlights current player
    #we need a way to make a bet
        #input boxes with only increasing steps unless converting to ones (With a conversion button)


#display who bet last and thier bet
#make the person's turn have a crown
#LOSE and WIN
#make game sessions
    #get rid of players who aren't playing
    #play again button (keep track of data from sessions)



#___________________________________Information on all players_________________________________________
colors = ["red","orange","yellow","green","blue","black"]
playerCount = 0
doubt = False
last_bet = [0,0]
turnOrder = []
current_turn_idx = 0
#which player started the game, they are the host, need gamestarted variable and a host variable t-f
playerInfo= {
    "red": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 0,
        "username": ""
        # store next player
        #maybe make the displayed/dice nums = -1 when they lose a die
    },
    "orange": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 1,
        "username": ""
    },
    "yellow": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 2,
        "username": ""
    },
    "green": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 3,
        "username": ""
    },
    "blue": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 4,
        "username": ""
    },
    "black": {
        "dice_nums": [0,0,0,0,0],
        "displayed_dice": [0,0,0,0,0],
        "rank": -1,
        "gameStart": False,
        "pos" : 5,
        "username": ""
    }
}

possible_chars = string.ascii_uppercase + string.digits
SESSION_ID_LEN = 4
all_session_ids = []

session_cookies = {} # dictionary where key is session, value is list of cookies associated with that session

def update_session_cookies():
    pass


#___________________________________GET Requests_________________________________________
@app.route('/')
def home_page():
    return app.send_static_file('home.html')

@app.route('/getNewSession', methods=['GET'])
def generate_session_id():
    session_id = ''.join(random.choice(possible_chars) for i in range(SESSION_ID_LEN))
    while session_id in all_session_ids:
        session_id = ''.join(random.choice(possible_chars) for i in range(SESSION_ID_LEN))

    all_session_ids.append(session_id)
    return session_id, 200

@app.route('/dudo', methods=['GET'])
def dudo():
    raise TypeError
    cup = request.args.get('cup')
    text = "the dudo was done by cup " + str(cup)
    return text
    # return render_template("index.html", message=text)

#GET the playerinfo dice dictionary
@app.route('/info/', methods=['GET'])
def getInfo():
    return json.dumps({"success": True, "allInfo": playerInfo}), 200

#GET and return player positions
@app.route("/getPos/", methods=["GET"])
def getPos():
    return json.dumps({"success": True, "data": playerInfo}), 200

#GET and return player's dice and displayed dice
@app.route("/getDisplayed/", methods=["GET"])
def getDisplayedDice():
    data = {
        "red":
        {
            "dice": playerInfo["red"]["dice_nums"],
            "disp": playerInfo["red"]["displayed_dice"]
        },
        "orange":
        {
            "dice": playerInfo["orange"][ "dice_nums"],
            "disp": playerInfo["orange"]["displayed_dice"]
        },
        "yellow":
        {
            "dice": playerInfo["yellow"][ "dice_nums"],
            "disp": playerInfo["yellow"]["displayed_dice"]
        },
        "green":
        {
            "dice": playerInfo["green"][ "dice_nums"],
            "disp": playerInfo["green"]["displayed_dice"]
        },
        "blue":
        {
            "dice": playerInfo["blue"][ "dice_nums"],
            "disp": playerInfo["blue"]["displayed_dice"]
        },
        "black":
        {
            "dice": playerInfo["black"][ "dice_nums"],
            "disp": playerInfo["black"]["displayed_dice"]
        }

    }

    return json.dumps({"success": True, "data": data}), 200

@app.route("/getDoubt/", methods=["GET"])
def getDoubt():
    return json.dumps({"success": True, "data": doubt}), 200

@app.route("/getTurnOrder/", methods=["GET"])
def getTurnOrder():
    return json.dumps({"success": True, "data": turnOrder}), 200

#returns the index of the color whos turn it currently is
@app.route("/getCurrentTurnColor/", methods=["GET"])
def getCurrentTurnColor():
    return json.dumps({"success": True, "current_turn_color": turnOrder[current_turn_idx]}), 200

#___________________________________POST Requests_________________________________________
@app.route('/gamePage', methods=['POST'])
def enter():
    print('----------------from server: ' + request.args.get('id'))
    return app.send_static_file('index.html'), 200

#POST the numbers of the player's dice to the server
@app.route("/postNums/", methods = ["POST"])
def postNums():
    body = json.loads(request.data)
    color_player = body["color"]
    dice_nums = body["dice_nums"]
    playerInfo[colors[color_player]]["dice_nums"] = dice_nums
    return json.dumps({"success": True, "data": body}), 201

#POST the dice which are displayed
@app.route("/postDisplayed/", methods = ["POST"])
def postDisplayed():
    body = json.loads(request.data)
    color_player = body["color"]
    displayed = body["displayed"]
    playerInfo[colors[color_player]]["displayed_dice"] = displayed
    return json.dumps({"success": True, "data": body}), 201

#POST the dice which are displayed
@app.route("/gameStart/", methods = ["POST"])
def gameStart():
    body = json.loads(request.data)
    global playerCount
    for key in playerInfo:
        playerInfo[key]["gameStart"] = True
    color_player = body["color"]
    playerInfo[colors[color_player]]["rank"] = playerCount
    # print("color of player =" + str(color_player) + "rank = " + str(playerInfo[colors[color_player]]["rank"]))
    playerCount +=1
    return json.dumps({"success": True, "data": body}), 201

#POST the dice positions
@app.route("/postPos/", methods = ["POST"])
def postPos():
    body = json.loads(request.data)
    # print(str(body))
    playerInfo["red"]["pos"] = body["redPos"]
    playerInfo["orange"]["pos"] = body["orangePos"]
    playerInfo["yellow"]["pos"] = body["yellowPos"]
    playerInfo["green"]["pos"] = body["greenPos"]
    playerInfo["blue"]["pos"] = body["bluePos"]
    playerInfo["black"]["pos"] = body["blackPos"]
    return json.dumps({"success": True, "data": body}), 201
      #for each die, make it's pos = the html pos

      #prior to clicking start game, you can see the host, and cannot click the host.

@app.route("/postUsername/", methods = ["POST"])
def postUsername():
    body = json.loads(request.data)
    cup_color = body["color"]
    playerInfo[cup_color]["username"] = body["username"]
    return json.dumps({"success": True, "data": body}), 201


@app.route("/postDoubt/", methods = ["POST"])
def postDoubt():
    global doubt
    doubt = True
    print("doubt: " + str(doubt))
    return json.dumps({"success": True}), 201

@app.route("/joinGame", methods=["POST"])
def join_game():
    session_id = request.args.get('id').upper()
    if session_id in all_session_ids:
         update_session_cookies()
         print(session_id)
         return session_id, 200
    else:
        return "That game ID does not exist.", 404

@app.route("/postTurnOrder/", methods = ["POST"])
def postTurnOrder():
    global turnOrder
    body = json.loads(request.data)
    turnOrder = body["turn_order"]
    return json.dumps({"success": True}), 201

@app.route("/postNextTurn/", methods = ["POST"])
def postNextTurn():
    global current_turn_idx
    if (current_turn_idx < len(turnOrder)):
        current_turn_idx += 1
    else:
        current_turn_idx = 0
    return json.dumps({"success": True}), 201



#___________________________________Run the server_________________________________________
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
