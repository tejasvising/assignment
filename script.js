var character = document.getElementById("character");
var block = document.getElementById("block");
var popup=document.querySelector('.popup');
var counter=0;
popup=document.getElementById('popup')
  function radio1(){
    popup.classList.toggle('hideP')
    console.log('fine',document.getElementById('check1').innerHTML)
    if(parseInt(document.getElementById('check1').innerHTML)!=5){
      console.log('fine',document.getElementById('check1').innerHTML)
      block.style.animation = "block 1s infinite linear";
    }
    
  }
  function radio2(){
    popup.classList.toggle('hideP')
    popup.classList.toggle('show')
    console.log('fine',document.getElementById('check2').innerHTML)
    if(parseInt(document.getElementById('check2').innerHTML)!=5){
      console.log('fine',document.getElementById('check2').innerHTML)
      block.style.animation = "block 1s infinite linear";
    }
  }
  function radio3(){
    popup.classList.toggle('hideP')
    if(parseInt(document.getElementById('check3').innerHTML)!=5){
      console.log('fine',document.getElementById('check3').innerHTML)
      block.style.animation = "block 1s infinite linear";
    }
  }
  function radio4(){
    popup.classList.toggle('hideP')
    if(parseInt(document.getElementById('check4').innerHTML)==5){
      console.log('wohoo',document.getElementById('check4').innerHTML)
     
    }
  }
  function start(){
     
console.log('hello')
  setTimeout(function(){
   popup.classList.toggle('hideP')
  
  },1000);
console.log("hi")

console.log(popup.value)
  }
function jump(){
  
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
        popup.classList.visibility = "visible";
    },1000);

}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 10s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
