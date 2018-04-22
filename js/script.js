function test(){
  var rate_value = 0;
  var result = "";

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

}

  if (rate_value <= 31 || rate_value >=24){
    result = "You are tu boujee";
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

  document.getElementById('results').innerHTML = "<br><p id='questions'> You got " + rate_value
  + "<br>" + result + "</p><br><button type='button'class='btn btn-lg btn-warning' onclick='reset()'>Reset</button>";


}

function reset(){
  location.reload();
}
