var colors = ["red", "orange", "yellow", "green", "blue", "black"]

function makeAllPlayerUI() {
    for (color in colors) {
        makePlayerDiv(colors[color])
    }
}

function makePlayerDiv(color) {
    var playerDiv = document.createElement("div");
    playerDiv.className = "player_div"
    playerDiv.id = color + "_player"
    playerDiv.innerHTML = "<input type='hidden' id='" + color + "Rank' value='-1'> <input type='hidden' id='" + color + "Pos' value='" + colors.indexOf(color) + "'>"

    var userInfoDiv = document.createElement("div");
    playerDiv.appendChild(userInfoDiv)
    userInfoDiv.className = "user_info"
    userInfoDiv.id = color + "_user_info"

    var usernameP = document.createElement("p");
    usernameP.id = color + "Username"

    var playerPicImage = document.createElement("img")
    playerPicImage.className = "player_pic"
    playerPicImage.id = color + "_user_pic"
    playerPicImage.src = "/static/resources/user_avatars/" + color + "_user.png"


    userInfoDiv.appendChild(playerPicImage);
    userInfoDiv.appendChild(usernameP);

    var cupImage = document.createElement("img")
    cupImage.className = "cup"
    cupImage.id = color + "_cup"
    cupImage.src = "/static/resources/cups/" + color + "_cup.png"
    cupImage.onmouseenter = function() { mouseEnterCup(colors.indexOf(color)); }
    cupImage.onmouseleave = function() { mouseLeaveCup(colors.indexOf(color)); }
    cupImage.onclick = function() { clicked_cup(colors.indexOf(color)); }

    playerDiv.appendChild(cupImage)


    var redTableDiv = document.createElement("div")
    redTableDiv.id = color + "_table_div"

    playerDiv.appendChild(redTableDiv)

    var playingRedDiv = document.createElement("div")
    playingRedDiv.id = "playing_" + color + "_div"

    var playingText = document.createElement("p")
    playingText.className = "playing_text"
    playingText.id = color + "_playing_text"
    playingText.innerText = "Playing..."


    redTableDiv.appendChild(playingRedDiv)
    playingRedDiv.appendChild(playingText)

    var redDiceDiv = document.createElement("div")
    redDiceDiv.id = color + "_dice_div"
    redTableDiv.appendChild(redDiceDiv)

    for (let i = 0; i < 5; i++) {
        var redDieImage = document.createElement("img")
        redDieImage.className = color + "_die_img"
        redDieImage.id = color + "_die" + (i + 1).toString() + "_img"
        redDieImage.src = "/static/resources/peach.png"
        redDieImage.onmousedown = function() { clicked_die(colors.indexOf(color), i + 1); }
        redDiceDiv.appendChild(redDieImage)
    }

    document.getElementById("wrapper").appendChild(playerDiv)

}