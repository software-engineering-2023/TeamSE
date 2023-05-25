function checkCondition(){

  var myTextBox = document.getElementById("userN");
  var username = myTextBox.value;
  if(username=== "customer"){
    window.location = 'customer.html';
  }else if (username=== "banker") {
      window.location = 'banker.html';
  }else if (username=== "admin") {
    window.location= admin.html;

  }else{
    alert("wrong username");
  }
}
