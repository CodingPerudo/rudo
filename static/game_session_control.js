function displayGamePage() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.open();
        document.write(this.responseText);
        document.close();
      } else {
          document.getElementById('join_fail').innerHTML = this.responseText;
      }
  };

  xhttp.open("POST", "/gamePage?id=" + session_id, true);
  xhttp.send();
}

function loadGame(session_id) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        displayGamePage();
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
  document.getElementById("new_game").style.visibility = 'visible';
  document.getElementById("join_game").style.visibility = 'visible';
}