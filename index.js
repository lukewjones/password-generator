const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1El = document.getElementById("pass-one");
let pass2El = document.getElementById("pass-two");
let passLengthEl = document.getElementById("pass-length");
let symbolsEl = document.getElementById("symbols");

function generatePassword() {
    let passLength = Number(passLengthEl.value);
    let usingSymbols = symbolsEl.checked;
    let passChars = [
        ...characters,
        ...(usingSymbols ? symbols : [])
    ];
    for (let passEl of [pass1El, pass2El]) {
        let randomPass = "";
        for (let i = 0; i < passLength; i++) {
            randomPass += passChars[Math.floor(Math.random() * passChars.length)];
            passEl.textContent = randomPass;
            passEl.onclick = function() {
                navigator.clipboard.writeText(randomPass);
                passEl.classList.add("pass-copied");
                setTimeout(function() {
                    passEl.classList.remove("pass-copied");
                }, 100);
            }
        }
    }
}

function copyInnerText() {

}


