//TODO new method for stuff in success of loadGame

function loadGame(session_id) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let xhttp2 = new XMLHttpRequest();
        xhttp2.open("POST", "/gamePage?id=" + session_id, true);
        xhttp2.send();
      } else {
          document.getElementById('join_fail').innerHTML = this.responseText;
      }
  };

  xhttp.open("POST", "/joinGame?id=" + session_id, true);
  xhttp.send();
}

function newGame() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        loadGame(this.responseText);
      } else {
          document.getElementById('join_fail').innerHTML = this.responseText;
      }
  };

  xhttp.open("GET", "/getNewSession", true);
  xhttp.send();
  
}

function joinGame() {
  let session_id = document.getElementById("session_id").value.toString();
  loadGame(session_id);
}

function enableButtons() {
  console.log("in enable");
  document.getElementById("new_game").style.visibility = 'visible';
  document.getElementById("join_game").style.visibility = 'visible';
}