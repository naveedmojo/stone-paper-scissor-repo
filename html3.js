let playerscore=0;
let computerscore=0;
let chances=10;
let gameover=false;
function gamefunction(value){
 if(chances>=1){
     gameover=false;
     maingame(value)
 }
 else{
     gameover=true;
     maingame(value)
 }

}
function maingame(value){
if(gameover==false){
    chances=chances-1;
    document.getElementById("currentchance").innerHTML=chances;
    const randomnumber=(Math.random(Math.random()*3));
    if(randomnumber<=0.3 || randomnumber>=.7){
        playerscore=playerscore+1;
        document.getElementById("playerscore").innerHTML=playerscore;
        document.getElementById("currentwin").innerHTML="PLAYER "+value+" WIN"+" COMPUTER LOOSE !!";

    }
    else{
        computerscore=computerscore+1;
        document.getElementById("computerscore").innerHTML=computerscore;
        document.getElementById("currentwin").innerHTML="PLAYER "+value+" Loose"+" COMPUTER WIN !!"

    }
}
else{
    document.getElementById("currentchance").innerHTML=chances;
    document.getElementById("gameover").style.display="block";
    document.getElementById("currentwin").style.display="none"
    if(playerscore>computerscore){
        document.getElementById("result").innerHTML="PLAYER WIN"
    }
    else if(playerscore<computerscore){
        document.getElementById("result").innerHTML="COMPUTER WIN"
    }
    else{
        document.getElementById("result").innerHTML="DRAW"
    }
}
}