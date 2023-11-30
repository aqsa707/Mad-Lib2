// Mad Lib by Aqsa

// Add an Event Listen to the button to run the MadLib function
document.getElementById("btn"). addEventListener("click", MadLib);

// Store order code in a function
function MadLib() {
// INPUT
let PluralNoun= document.getElementById("pn-in").value;
let Adjective = document.getElementById("adj-in").value;
let PresentTenseVerb = document.getElementById("ptv-in").value;
let Noun = document.getElementById("noun-in").value;



// PROCESS
let msg = `"There are too many ${PluralNoun} on this ${Adjective} airplane!", I screamed. "Somebody has to ${PresentTenseVerb} on the ${Noun} to solve this problem."`;

// OUTPUT
document.getElementById("output"). innerHTML = msg;
}