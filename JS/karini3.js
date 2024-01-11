function afficher(){
  ok=true;
  champs=[document.getElementById("sc1"),document.getElementById("sc2"),document.getElementById("sc3"),document.getElementById("sc4"),document.getElementById("sc5")
  ,document.getElementById("sc6")];
  for(champ of champs){
    if(champ.style.display==='none'){
      ok=false;
      champ.style.display='inline-block';
      return;
    }
  }
  if(ok==true) alert("Le nombre maximal des séances est 6");
}

  