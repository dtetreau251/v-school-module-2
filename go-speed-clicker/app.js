
function lastScore() {
  var lastspeed = localStorage.getItem("cnt");
  var scoreDiv = document.getElementById("lastScore");
  scoreDiv.innerHTML=`Your last score was ${lastspeed} mph`;
}

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    endRace();

  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function endRace() {
  var speed = localStorage.getItem("cnt");
  var myobj = document.getElementById("btnClick");
  myobj.remove();
  var removeCount = document.getElementById("showCount");
  removeCount.remove();
  if (cnt === 0) {
    var refresh = document.getElementById("words");
    refresh.innerHTML= "You didn't click the button! Refresh the page!";
  }
  else {
    var raceMessage = document.getElementById("words");
    raceMessage.innerHTML=`Times up! Your speed was ${speed} mph. Push refresh.`;
  }
}


let cnt=0;
function clickCount(){
     cnt++
     localStorage.setItem("cnt", cnt);
     var divData=document.getElementById("showCount");
     divData.innerHTML=`Speed: ${cnt} mph`;//this part has been edited
    }

    var timeLeft = 30;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
   