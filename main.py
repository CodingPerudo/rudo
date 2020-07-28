import json
from flask import Flask, request
# from flask import render_template

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

#michelle is not the best
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
colors = ["red","orange","yellow","green","blue","black"]

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

#___________________________________GET Requests_________________________________________
@app.route('/')
def enter():
    return app.send_static_file('index.html')

@app.route('/dudo', methods=['GET'])
def dudo():
    cup = request.args.get('cup')
    text = "the dudo was done by cup " + str(cup)
    return text
    # return render_template("index.html", message=text)

#GET the playerinfo dice dictionary
@app.route('/info/', methods=['GET'])
def getInfo():
    return json.dumps({"success": True, "allInfo": playerInfo}), 200

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

#___________________________________POST Requests_________________________________________

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


#___________________________________Run the server_________________________________________
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000, debug=True)
