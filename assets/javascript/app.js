
//-------------global variables and render buttons from search function--------//


const wrestlers = ["hulk hogan","andre the giant","mr perfect","the rock","roudy piper","vince mcmahon","jake the snake roberts","the ultimate warrior","the undertaker","shawn michaels" ]


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
    document.qetElementByClassList("wrestler").forEach(function(button) {
        button.addEventListener("Click", function () {
            alert("click")
        const person = this.getAttribute("data-person");    
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=0R2seTXc9SmksHcymZzrTgcyC2E9FL88&q&limit=10&rating=g";
          
    fetch(queryURL)
      .then(function (response) {
        return response.json()
      })
      .then(function (responseJson) {
          
      const rating = responseJson.Rated;

      const pOne = document.createElement("p")
      pOne.innerHTML = "Rating: " + rating;

      wrestlerDiv.append(pOne);

      const gifURL = responseJson.gif;

      const image = document.createElement("img")
      gif.setAttribute("src", gifURL);

         wrestlerDiv.append(gif);

      document.getElementById("wrestlers-view").prepend(wrestlerDiv);
    });
});
});
};