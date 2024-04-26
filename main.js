const button = document.querySelector(".button")
button.addEventListener("click", function () {
    const sujet = document.querySelector("#sujet").value;
    const reponse = document.querySelector("reponse").value;
    let score =0;
    
    if (sujet === reponse ) {

       score = score + 1;
    }
    else {
       score =score
    }

})
