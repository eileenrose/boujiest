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
    var drink = "";


    if (points < 7 && points >= 4){
      result = "<b>A-for-Effort</b><br>This one is self-explanatory<br><br><br>";
      drink = "img/wine.png"
    }
    else if (points < 17 && points >= 7){
      result = "<b>On-a-good-day Boujee</b> <br>Hey, don’t be sad. " +
      "We can’t all be boujee all the time! But don’t be bummed," +
      " the boujee force is still with you. Sometimes.";
      drink = "img/4lokos.png";
    }
    else if (points >= 17 && points < 24){
      result = "<b>80% Boujee </b><br>So, you’re like kind of there,"
      + " but not fully, but more than others. Just remember, "
      + "the world is cruel.";
      drink = "img/beer.jpeg";
    }
    else if (points <= 31 && points >=24){
      result = "<b>You are the Boujiest!</b> <br>Wow… even us at AllHailTheBoujee" +
      " are amazed at your great boujiness. You have really proven your" +
      " worth amongst us Californians. All hail the boujiest!!";
      drink = "img/ballermartini.jpg";
    }
    else{
      result = "This is an error.";
    }


    document.getElementById('results').innerHTML = "<br><div class='container-fluid'><div class='row'><div class='col-md-6'><div style='border-right-style:dotted;border-left-style:dotted;background-color:#f9b857;padding:20px;margin:50px'><p style='font-size:24px'> You have " + points
    + " boujee points!</p><br><br><p style='font-size:20px'>Your Boujee level is: " + result + "</p></div></div><div class='col-md-6'><br><br><br><img src='"+drink+"'></div></div><br><button type='button'class='btn btn-lg btn-warning' onclick='reset()'>Reset</button>";



}

function reset(){
  window.location.replace("portfolio.html");
}
