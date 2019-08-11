
//-------------global variables and render buttons from search function--------//


const wrestlers = ["hulkhogan","andrethegiant","mrperfect","therock","roudypiper","vincemcmahon","jakethesnakeroberts","theultimatewarrior","theundertaker","shawnmichaels" ]


function renderButtons() {

    document.getElementById("wrestler-buttons").innerHTML = "";

        for (let i = 0; i < wrestlers.length; i++) {

          const a = document.createElement("button");
          a.classList.add("wrestler");
          a.setAttribute("data-person", wrestlers[i]);
          a.innerHTML = wrestlers[i];
          document.getElementById("wrestler-buttons").append(a);


        }  
    } 
        renderButtons();
    document.getElementById("add-wrestler").addEventListener("click", function(event) {
        event.preventDefault();

        let wrestler = document.getElementById("wrestler-input").value.trim();

        wrestlers.push(wrestler);
        

        renderButtons();
    });

        
// ---------------------------fetch section ----------------------------- //

function displayWrestlerInfo() {
    document.querySelectorAll("button").forEach(function(button) {
        button.addEventListener("Click", function () {
            
        const person = this.getAttribute("data-person");    
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=0R2seTXc9SmksHcymZzrTgcyC2E9FL88&q&limit=10&rating=g";
          
    fetch(queryURL)
      .then(function (response) {
        return response.json()
      })
      .then(function (responseJson) {

      const wrestlerDiv = document.createElement("div");
      wrestlerDiv.classList.add("wrestler-div");

      const rating = responseJson.Rated;

      const pOne = document.createElement("p")
      pOne.innerHTML = "Rating: " + rating;

      wrestlerDiv.append(pOne);

      const imgURL = responseJson.GIF;

      const image = document.createElement("img")
      image.setAttribute("src", imgURL);

         wrestlerDiv.append(image);

      document.getElementById("wrestlers-view").prepend(wrestlerDiv);
    });
});
});
};