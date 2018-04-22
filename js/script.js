function test(){
  var rate_value = 0;

  for(var i = 1; i <= 10; i++){
  if (document.getElementById(i+'a').checked) {
  rate_value += parseInt(document.getElementById(i+'a').value);
  }
  if (document.getElementById(i+'b').checked) {
  rate_value += parseInt(document.getElementById(i+'b').value);
  }
  if (document.getElementById(i+'c').checked) {
  rate_value += parseInt(document.getElementById(i+'c').value);
  }
  if (document.getElementById(i+'d').checked) {
  rate_value += parseInt(document.getElementById(i+'d').value);
  }

  var t = rate_value, url = "results.html?value=" + encodeURIComponent(t);

  document.location.href = url;
}

/*function testJS() {
    var b = document.getElementById('name').value,
        url = 'http://path_to_your_html_files/next.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}*/





}

function results(rate_value){

  window.location.replace("results.html");

  var result = "";

  if (rate_value <= 31 || rate_value >=24){
    result = "You are the Boujee";
  }
  else if (rate_value >= 17 || rate_value < 24){
    result = "80% Boujee";
  }
  else if (rate_value < 17 || rate_value >= 7){
    result = "On-a-good-day Boujee";
  }
  else if(rate_value < 7 || rate_value >= 4){
    result = "A-for-Effort";
  }
  else{
    result = "This is an error.";
  }


  this.document.getElementById('results').innerHTML = "<br><p id='questions'> You have " + rate_value
  + " boujee points!<br>Your Boujee level is: " + result + "</p><br><button type='button'class='btn btn-lg btn-warning' onclick='reset()'>Reset</button>";


}

function reset(){
  location.reload();
}
