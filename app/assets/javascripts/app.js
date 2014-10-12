// tick tack toe app using JS...
// 1) layout and css
// 2) js to make first click become an X
// 3) JS TO make slick become an O 
  // we now need to a player variable...
  // define it to one then use a decisionbox to determine 0 and x betweeen eahc player
  // we can have it so user types in a name, value is put on a box, but anohte box will be updated set value too one.
  // and another to two.
// 4) disable button after user has clicked on them...
  // simple disable method!




  var player = 1 
  function clickBtn(btn){
    if(player == 1){
       // increment and decrement to swap between values each time..
                  // becaause as if the players are swapping each time as if there taking turns! 
      document.getElementById(btn).value = "X"
      document.getElementById(btn).disabled = "disabled"
      completeGame();
      player +=1
      // $("btn").value = "X"
    }else{
      document.getElementById(btn).value = "O"
      document.getElementById(btn).disabled = "disabled"
      completeGame();
      player -=1
    } 
  } 
// determining a winner ==========================================================================
  // the tricky bit actaully quite easy
  // chaing muitple scenreos using the && meaning all must be true (all must be X) in order to execute
  // nothing will happens as this function will not execute 
  // we need to put in the above the clickBTN button
  // we can use an || in the decision blocks to make other winning conidtions
  function completeGame(){
    if($("#btn1").val() == "X" && 
      $("#btn2").val() == "X" && 
      $("#btn3").val() == "X" || 
      $("#btn4").val() == "X" && 
      $("#btn5").val() == "X" && 
      $("#btn6").val() == "X" || 
      $("#btn7").val() == "X" && 
      $("#btn8").val() == "X" && 
      $("#btn9").val() == "X" || 
      $("#btn1").val() == "X" && 
      $("#btn4").val() == "X" && 
      $("#btn7").val() == "X" || 
      $("#btn2").val() == "X" && 
      $("#btn5").val() == "X" && 
      $("#btn8").val() == "X" ||
      $("#btn3").val() == "X" && 
      $("#btn6").val() == "X" && 
      $("#btn9").val() == "X" ||
      $("#btn1").val() == "X" && 
      $("#btn5").val() == "X" && 
      $("#btn9").val() == "X" || 
      $("#btn3").val() == "X" && 
      $("#btn5").val() == "X" && 
      $("#btn7").val() == "X"
       ){
      alert("helloooo!")
      $("#player-one-win").css("visibility", "visible")
      // need to disable buttons again....
    }else if($("#btn1").val() == "O" && 
      $("#btn2").val() == "O" && 
      $("#btn3").val() == "O" || 
      $("#btn4").val() == "O" && 
      $("#btn5").val() == "O" && 
      $("#btn6").val() == "O" || 
      $("#btn7").val() == "O" && 
      $("#btn8").val() == "O" && 
      $("#btn9").val() == "O" || 
      $("#btn1").val() == "O" && 
      $("#btn4").val() == "O" && 
      $("#btn7").val() == "O" || 
      $("#btn2").val() == "O" && 
      $("#btn5").val() == "O" && 
      $("#btn8").val() == "O" ||
      $("#btn3").val() == "O" && 
      $("#btn6").val() == "O" && 
      $("#btn9").val() == "O" || 
      $("#btn1").val() == "O" && 
      $("#btn5").val() == "O" && 
      $("#btn9").val() == "O" || 
      $("#btn3").val() == "O" && 
      $("#btn5").val() == "O" && 
      $("#btn7").val() == "O"
      ){ // disable buttons again.
      alert("hi!")
      $("#player-two-win").css("visibility", "visible")
      
    }      
  }  
// reset function
function reset(){
  for(i=1 ;i <= 9; i++){
    console.log(i)
     $("#btn"+i).val("")
     $("#btn"+i).removeAttr("disabled"); 
  }
   $("#player-two-win,#player-one-win").css("visibility", "hidden")
  // $("#btn1,#btn2,#btn3,#btn4,#btn5").val("")
}