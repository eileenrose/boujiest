window.onLoad = function() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];

    }

    var points = data[tmp[0]];

    var result = "";


    if (points < 7 && points >= 4){
      result = "A-for-Effort<br>This one is self-explanatory";
    }
    else if (points < 17 && points >= 7){
      result = "On-a-good-day Boujee <br>Hey, don’t be sad. " +
      "We can’t all be boujee all the time! But don’t be bummed," +
      " the boujee force is still with you. Sometimes.";
    }
    else if (points >= 17 && points < 24){
      result = "80% Boujee <br>So, you’re like kind of there,"
      + " but not fully, but more than others. Just remember, "
      + "the world is cruel.";
    }
    else if (points <= 31 && points >=24){
      result = "You are the Boujiest! <br>Wow… even us at (team name)" +
      " are amazed at your great boujiness. You have really proven your" +
      " worth amongst us Californians. All hail the boujiest!!";
    }
    else{
      result = "This is an error.";
    }


    document.getElementById('results').innerHTML = "<br><p id='questions'> You have " + points
    + " boujee points!<br>Your Boujee level is: " + result + "</p><br><button type='button'class='btn btn-lg btn-warning' onclick='reset()'>Reset</button>";



}

function reset(){
  window.location.replace("portfolio.html");
}
