let spørsmål = ["Synes du Norge bør bli mindre avhengig av EUs strømmarked?",
"Ønsker du mer fokus på å bekjempe klimakrisen", "Synes du at oljeletingen bør ta slutt?", "Støtter du gjeninnføring av arveskatt i Norge?",
"Ønsker du en leksefri skole?", "Støtter du økning av eiendomsskatten?", "Private aktører bør ikke drive velferdstjenester?", 
"Er du enig i at Trondheim bør bruke mer ressurser på eldreomsorg?", "Sårbare familier bør få mer støtte fra kommunen?",
"Er du imot å privatisere helsetjenesten?", "Er du for gratis lunsj på skolen?", "Er du fornøyd med det nåværende nærskoleprinsippet", "Er du enig i at monarkiet bør avskaffes", "Vil du at Norge skal melde seg ut av NATO og istedenfor fokusere på en nordisk allianse?","Staten bør gi mer støtte til fritidsordninger slik at barn i Norge for lettere tilgang til ulike fritidsordninger.", 
"Er du enig i at bompenger bør avikles og istedenfor bør veiene finansieres av staten?", "Vil du ha større statlig kontroll av boligmarkedet for å senke boligprisene?",
"Synes du at Trondheim bør bruke mer penger på å bevare det rike kulturlivet i byen?", "Det bør bli lavere skatt for de som tjener minst og høyere for de som tjener mest. ", "Er du imot eksamen og ønsker en alternativ undervisningsform?", 
"Retten til læringsplass bør lovfestes slik at ingen elever blir utelatt fra å fullføre utdanningen sin?", "Ønsker du et gratis alternativ til dagens privatistordning?", 
"Ønsker du at lærlinger skal få høyere stipend enn det de får i dag?"]


let i = 0;


function OnClickButton(){

/* Denne if setningen sjekker hvor på listen av spørsmål man er. Hvis man ikke er gjennom alt vil den vise det neste spørsmålet, i tillegg til at progressbaren oppdateres. 
else kjøres når når man er gjennom listen. Da vil den kalle funksjonen kalkulerResultat som vil vise resultatet av valgomaten på siden.
I tillegg til funksjonen ferdig. */
if(i < spørsmål.length) {
    document.getElementById("OverskriftButtons").innerHTML = spørsmål[i++];
    framgang();
     }


else { 
  kalkulerResultat();
  ferdig();
  }
}



let TotalSum = 0;

function EnigSum(){
TotalSum +=5;
EndreFargeEnig();
}

function UsikkerSum(){
    TotalSum +=1;
    EndreFargeUsikker();
}

function UenigSum(){
  TotalSum+=-1;
  if (TotalSum < 0) {
    TotalSum = 0;
  }
EndreFargeUenig();
}

function EndreFargeUsikker(){
  document.getElementById("UsikkerKnapp").style.backgroundColor = "yellow";
}

function EndreFargeUenig( ){
document.getElementById("UenigKnapp").style.backgroundColor  = "red";
}

function EndreFargeEnig(){
  document.getElementById("EnigKnapp").style.backgroundColor = "lightgreen";
}

function UenigUp(){
  document.getElementById("UenigKnapp").style.backgroundColor = "wheat";
}

function UsikkerUp(){
  document.getElementById("UsikkerKnapp").style.backgroundColor = "wheat";
}

function EnigUp(){
  document.getElementById("EnigKnapp").style.backgroundColor = "wheat";
}


// En funksjon som tar imot to verdier og utregner prosenten
function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 

/* muligPoeng er den største poengsummen man kan få hvis basert på mengden spørsmål og hvis man får 5 poeng når man trykker enig. 
Mengdem spørsmålet må økes med 1, fordi det første spørsmålet ikke er i listen. 
*/

let totalSpørsmål = spørsmål.length + 1;
let muligPoeng = totalSpørsmål * 5;



// Funkjsonen percentage tar imot verdiene og regner ut prosentscoren også logger resultatet til konsollen.

function kalkulerResultat() {
  let resultat = percentage(TotalSum, muligPoeng);
  let riktigResultat = Math.floor(resultat);
  if(riktigResultat >= 90) {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss! Vi er nok det riktige partiet for deg.`;

  } else if(riktigResultat >= 60) {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss! Med litt mer overbevisning kommer du til å støtte oss.`;
  } else if(riktigResultat >= 35) {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss! Med mer overbevisning kommer du til å støtte oss. `;

  } else if(riktigResultat >= 25) {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss! Vi er nok ikke det riktige partiet for deg.`;

  } else if(riktigResultat >= 10) {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss! Du har veldig mange uenigheter med oss.`;

  } else {
    document.getElementById("OverskriftButtons").innerHTML = `Du er ${riktigResultat}% enig med oss!`;
  }


  
  console.log(riktigResultat);
}

// Denne funksjonen fjerner svarknappene og lager en ny knapp for de som ønsker å ta testen på nytt. Denne knappen har en funksjon som restarter nettsiden.
function ferdig() {
  document.getElementById("EnigKnapp").remove();
  document.getElementById("UsikkerKnapp").remove();
  document.getElementById("UenigKnapp").remove();

  const div = document.getElementsByClassName("Buttons")[0];
  const newButton = document.createElement("button");
  newButton.textContent = "Ta testen på nytt!"
  newButton.addEventListener("click", function () {
    
    location.reload();
  });

  div.appendChild(newButton);
}

document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  if(e.code == "Numpad1") {
    console.log(TotalSum);
  }
}


/* Denne funksjonen oppdatter progress baren med en passende verdi i forhold til hvor mange spørsmål det er hver gang en knapp blir trykket.
Så lenge bredden er mindre enn 100.
*/
let bredde = 0;

function framgang() {
  if(bredde < 100) {
    bredde += 100 / spørsmål.length;
    document.getElementById("myProgressBar").style.width = `${bredde}%`;

  }
  
}