function valider1() {
    
    let x = document.getElementById("ord1").value;
    let text1;
    if (x != "OSINT") {
      text1 = "Feil";
      document.getElementById("feil1").innerHTML = text1;
      return false;
    } else {
      text1 = "Riktig!";
      document.getElementById("feil1").innerHTML = text1;
      return true;
    }
};

function valider2() {  
    let y = document.getElementById("ord2").value;
    let text2;
    if (y != "SQLITE") {
    text2 = "Feil";
    document.getElementById("feil2").innerHTML = text2;
    return false;
    } else {
        text2 = "Riktig!";
        document.getElementById("feil2").innerHTML = text2;
        return true;
     }
    
};
function valider3() {
  let z = document.getElementById("ord3").value; 
  let text3;
  if (z != "INVESTIGATION") {
    text3 = "Feil";
    document.getElementById("feil3").innerHTML = text3;
    return false;
  } else {
    text3 = "Riktig!";
    document.getElementById("feil3").innerHTML = text3;
    return true;
  }
};

function valider4() {  
  let æ = document.getElementById("ord4").value;  
  let text4;
  if (æ != "ENCRYPTED") {
    text4 = "Feil";
    document.getElementById("feil4").innerHTML = text4;
    return false;
    
  } else {
    text4 = "Riktig!";
    document.getElementById("feil4").innerHTML = text4;
    return false;
  }
};

function valider5() {  
  let ø = document.getElementById("ord5").value; 
  let text5;
  if (ø != "FORENSICS") {
    text5 = "Feil";
    document.getElementById("feil5").innerHTML = text5;
    return false;
  } else {
    text5 = "Riktig!";
    document.getElementById("feil5").innerHTML = text5;
    return true;
  }
};
  
function valider6() {  
  let å = document.getElementById("ord6").value;  
  let text6;
  if (å != "DATABASE") {
    text6 = "Feil";
    document.getElementById("feil6").innerHTML = text6;
    return false;
    
  } else {
    text6 = "Riktig!";
    document.getElementById("feil6").innerHTML = text6;
    return true;
  }
};

function valider7() { 
  let a = document.getElementById("ord7").value;  
  let text7;
  if (a != "JSON") {
    text7 = "Feil";
    document.getElementById("feil7").innerHTML = text7;
    return false;
    
  } else {
    text7 = "Riktig!";
    document.getElementById("feil7").innerHTML = text7;
    return true;
  }
 

  
};
function valider(){
    let text = "Bra jobbet du fikk alt riktig! Følg denne linken for å søke.";
    if(valider1() && valider2() && valider3() && valider4() && valider5() && valider6() && valider7()){
    document.getElementById("statusmelding").innerHTML = text;
    alert("Bra jobbet du fikk alt riktig! Følg denne linken for å søke.");
    console.log(valider1() && valider2() && valider3() && valider4() && valider5() && valider6() && valider7());
    
}
};
