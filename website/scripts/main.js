
function greet()
{
  var codeword = document.getElementById('name').value;
  if (codeword == "mellon" || codeword == "Mellon") {
alert('Welcome, ' + document.getElementById('name').value + '. Please enter our mines!');
}else{
  alert("you shall not pass")
}
}
