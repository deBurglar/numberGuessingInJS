const myButton = document.getElementById("myButton");
const guess = Math.floor(Math.random()*20 +1);
let guesses = 0;

//submit
myButton.addEventListener("click", () => {
  const num = document.getElementById("num").value;
  guesses+=1;
  
  if(num < guess){
    alert("Think Big!");
  }
  else if(num > guess){
    alert("Keep it Low!!")
  }
  else if(num == guess){
    alert("Dang! You took " + guesses + " guesses");
  }
});

