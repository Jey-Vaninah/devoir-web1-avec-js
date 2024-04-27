const form = document.querySelector("form");
const phrases = [
   "hello worlds from my game",
   "this game is amazing",
];
const words = phrases.join(" ").trim().split(" ");

updateSujet();

// --------------------------------------------------
form.addEventListener("submit", (event)=>{
   event.preventDefault();
   const sujet = document.querySelector("#sujet").textContent;
   const reponse = document.querySelector("#reponse").value;

   if(sujet == reponse){
      const oldValue = document.querySelector("#score").textContent;
      document.querySelector("#score").textContent = Number(oldValue) + 1;
   }
   
   updateSujet();
   document.querySelector("#reponse").value = "";
});

document.querySelector("#phrases-radio").addEventListener("change", (event)=>{
   updateSujet();
});
document.querySelector("#words-radio").addEventListener("change", (event)=>{
   updateSujet();
});

function getRandomIndex(a, b){
   return Math.floor(Math.random() * (b - a)) + a;
}

function updateSujet(){
   const isWords = document.querySelector("#words-radio").checked;
   current = isWords ? words[getRandomIndex(0, words.length)] : phrases[getRandomIndex(0, phrases.length)];
   document.querySelector("#sujet").textContent = current;
}