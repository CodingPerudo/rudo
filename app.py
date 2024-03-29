import json
from flask import Flask, request
import string
import random
from game import Game

app = Flask(__name__)



#shift everything to the middle of the screen more
#because it looks ew rn and imma forget to do it if i dont write it down


#we gotta make it so you can show/reroll your dice until the next player bets


#militsa
    #dudo button
        #says who clicked it
    #exacto button
        #only available to a few people
    #^^^^YOU WON or YOU LOST 
    #play again button (keep track of data from sessions)
    #refresh actions
    #home page

#michelle 
    #display dice and reroll dice **buggy 
    #convert to ones button? 
    #we have to get rid of dice
    #losing -> gray
    #display who bet last 
    #game id make smaller text
    #fix bug with rerolling dice

#peter
    #make the server available online
    #cheeky round!
    #disable increasing face num
    #when you get out change the order


#future 
    #make a computer player



#Uncaught TypeError: Cannot set property 'onmouseenter' of null at perudo_game.js:126
#make it more apparent when the turn changes 
#resultion make a scrolling 
#make reroll more obvious
#if she selected display dice, reset selection after display dice
#each die should only reroll once
##show which dice are displayed
#last dice doesnt select
#when you bet with 1's probability calculates with relation to 1's



#___________________________________Information on all players_________________________________________
all_games = {} # key is session ID, value is Game instance

possible_chars = string.ascii_uppercase + string.digits
SESSION_ID_LEN = 4
all_session_ids = []

session_cookies = {} # dictionary where key is session, value is list of cookies associated with that session

def update_session_cookies():
    pass


#___________________________________GET Requests_________________________________________
@app.route('/')
def index():
    return app.send_static_file('home.html')

@app.route('/getNewSession', methods=['GET'])
def generate_session_id():
    session_id = ''.join(random.choice(possible_chars) for i in range(SESSION_ID_LEN))
    while session_id in all_session_ids:
        session_id = ''.join(random.choice(possible_chars) for i in range(SESSION_ID_LEN))

    all_session_ids.append(session_id)
    all_games[session_id] = Game()

    return session_id, 200

@app.route('/dudo', methods=['GET'])
def dudo():
    cup = request.args.get('cup')
    text = "the dudo was done by cup " + str(cup)
    return text

#GET the playerinfo dice dictionary
@app.route('/info', methods=['GET'])
def getInfo():
    game_id = request.args.get('id')
    return json.dumps({"success": True, "allInfo": all_games[game_id].playerInfo}), 200

#GET and return player positions
@app.route("/getPos", methods=["GET"])
def getPos():
    game_id = request.args.get('id')
    return json.dumps({"success": True, "data": all_games[game_id].playerInfo}), 200

#GET and return player's dice and displayed dice
@app.route("/getDisplayed", methods=["GET"])
def getDisplayedDice():
    game_id = request.args.get('id')
    playerInfo = all_games[game_id].playerInfo
    data = {
        "red":
        {
            "dice": playerInfo["red"]["dice_nums"],
            "disp": playerInfo["red"]["displayed_dice"],
            "dice_left": playerInfo["red"]["num_dice_left"]
        },
        "orange":
        {
            "dice": playerInfo["orange"][ "dice_nums"],
            "disp": playerInfo["orange"]["displayed_dice"],
            "dice_left": playerInfo["orange"]["num_dice_left"]
        },
        "yellow":
        {
            "dice": playerInfo["yellow"][ "dice_nums"],
            "disp": playerInfo["yellow"]["displayed_dice"],
            "dice_left": playerInfo["yellow"]["num_dice_left"]
        },
        "green":
        {
            "dice": playerInfo["green"][ "dice_nums"],
            "disp": playerInfo["green"]["displayed_dice"],
            "dice_left": playerInfo["green"]["num_dice_left"]
        },
        "blue":
        {
            "dice": playerInfo["blue"][ "dice_nums"],
            "disp": playerInfo["blue"]["displayed_dice"],
            "dice_left": playerInfo["blue"]["num_dice_left"]
        },
        "black":
        {
            "dice": playerInfo["black"][ "dice_nums"],
            "disp": playerInfo["black"]["displayed_dice"],
            "dice_left": playerInfo["black"]["num_dice_left"]
        }


    }

    return json.dumps({"success": True, "data": data}), 200

@app.route("/getDoubt", methods=["GET"])
def getDoubt():
    game_id = request.args.get('id')
    return json.dumps({"success": True, "data": all_games[game_id].doubt}), 200

@app.route("/getTurnOrder", methods=["GET"])
def getTurnOrder():
    game_id = request.args.get('id')
    return json.dumps({"success": True, "data": all_games[game_id].turnOrder}), 200

#returns the index of the color whos turn it currently is
@app.route("/getCurrentTurnColor", methods=["GET"])
def getCurrentTurnColor():
    game_id = request.args.get('id')
    game = all_games[game_id]
    return json.dumps({"success": True, "current_turn_color": game.turnOrder[game.current_turn_idx]}), 200


@app.route("/getStartSession", methods=["GET"])
def getStartSession():
    game_id = request.args.get('id')
    game = all_games[game_id]
    return json.dumps({"success": True, "start_session": game.start_session}), 200

@app.route("/getHost", methods=["GET"])
def getPlayersInSession():
    game_id = request.args.get('id')
    game = all_games[game_id]
    if(len(game.playerCodes) != 0):
        return json.dumps({"success": True, "host": game.playerCodes[0]}), 200
    else:
        return json.dumps({"success": True, "host": "No Host"}), 404

@app.route("/getPreviousBet", methods=["GET"])
def getPreviousBet():
    game_id = request.args.get('id')
    game = all_games[game_id]
    return json.dumps({"success": True, "prev_bet_count": game.last_bet[0], "prev_bet_face": game.last_bet[1]}), 200



#___________________________________POST Requests_________________________________________
@app.route('/gamePage', methods=['POST'])
def enter():
    print('----------------from server: ' + request.args.get('id'))
    return app.send_static_file('index.html'), 200

#POST the numbers of the player's dice to the server
@app.route("/postNums", methods = ["POST"])
def postNums():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    color_player = body["color"]
    dice_nums = body["dice_nums"]
    game.playerInfo[game.colors[color_player]]["dice_nums"] = dice_nums
    return json.dumps({"success": True, "data": body}), 201

#POST the dice which are displayed
@app.route("/postDisplayed", methods = ["POST"])
def postDisplayed():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    color_player = body["color"]
    displayed = body["displayed"]
    game.playerInfo[game.colors[color_player]]["displayed_dice"] = displayed
    return json.dumps({"success": True, "data": body}), 201

#POST the dice which are displayed
@app.route("/gameStart", methods = ["POST"])
def gameStart():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    for key in game.playerInfo:
        game.playerInfo[key]["gameStart"] = True
    color_player = body["color"]
    game.playerInfo[game.colors[color_player]]["rank"] = game.playerCount
    # print("color of player =" + str(color_player) + "rank = " + str(playerInfo[colors[color_player]]["rank"]))
    game.playerCount +=1
    return json.dumps({"success": True, "data": body}), 201

#POST the dice positions
@app.route("/postPos", methods = ["POST"])
def postPos():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    # print(str(body))
    game.playerInfo["red"]["rank"] = body["redRank"]
    game.playerInfo["orange"]["rank"] = body["orangeRank"]
    game.playerInfo["yellow"]["rank"] = body["yellowRank"]
    game.playerInfo["green"]["rank"] = body["greenRank"]
    game.playerInfo["blue"]["rank"] = body["blueRank"]
    game.playerInfo["black"]["rank"] = body["blackRank"]
    return json.dumps({"success": True, "data": body}), 201
    #for each die, make it's pos = the html pos
    #prior to clicking start game, you can see the host, and cannot click the host.

@app.route("/postUsername", methods = ["POST"])
def postUsername():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    cup_color = body["color"]
    game.playerInfo[cup_color]["username"] = body["username"]
    return json.dumps({"success": True, "data": body}), 201

@app.route("/postDoubt", methods = ["POST"])
def postDoubt():
    game_id = request.args.get('id')
    game = all_games[game_id]
    game.doubt = True
    return json.dumps({"success": True}), 201

@app.route("/joinGame", methods=["POST"])
def join_game():
    session_id = request.args.get('id').upper()
    if session_id in all_session_ids:
         update_session_cookies()
         return session_id, 200
    else:
        return "That game ID does not exist.", 404

@app.route("/postTurnOrder", methods = ["POST"])
def postTurnOrder():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    game.turnOrder = body["turn_order"]
    return json.dumps({"success": True}), 201

#increments turn_idx to represent who is playing currently
#also posts the new latest bet from the player
@app.route("/postNextTurn", methods = ["POST"])
def postNextTurn():
    game_id = request.args.get('id')
    game = all_games[game_id]
    if (game.current_turn_idx < len(game.turnOrder) -1):
        game.current_turn_idx += 1
    else:
        game.current_turn_idx = 0
    body = json.loads(request.data)
    game.last_bet[0] = body["bet_count"]
    game.last_bet[1] = body["bet_face"]
    return json.dumps({"success": True}), 201

@app.route("/postStartSession", methods = ["POST"])
def postStartSession():
    game_id = request.args.get('id')
    game = all_games[game_id]
    game.start_session = True
    return json.dumps({"success": True}), 201

@app.route("/postPlayerCode", methods = ["POST"])
def postPlayerCode():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    game.playerCodes.append(body["code"])
    return json.dumps({"success": True}), 201

@app.route("/postLostDie", methods = ["POST"])
def postLostDie():
    game_id = request.args.get('id')
    game = all_games[game_id]
    body = json.loads(request.data)
    color_player = body["color"]
    game.playerInfo[game.colors[color_player]]["num_dice_left"] -= 1
    return json.dumps({"success": True}), 201

#___________________________________Run the server_________________________________________
if __name__ == "__main__":
    app.run(threaded=True, port=5000, debug=True)
