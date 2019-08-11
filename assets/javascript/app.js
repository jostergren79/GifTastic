
//-------------global variables and render buttons from search function--------//


const wrestlers = ["hulk hogan","andre the giant","mr perfect","the rock","roudy piper","vince mcmahon","jake the snake roberts","the ultimate warrior","the undertaker","shawn michaels" ]


function renderButtons() {

    document.getElementById("wrestler-buttons").innerHTML = "";

        for (let i = 0; i < wrestlers.length; i++) {

            const a = document.createElement("button");
            a.setAttribute("data-person" , wrestlers[i]);
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

        
// ---------------------------fetch section(still inoperable) ----------------------------- //

     document.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function (event) {      // Grabbing and storing the data-animal property value from the button
          const person = event.target.getAttribute("data-person");
          const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=0R2seTXc9SmksHcymZzrTgcyC2E9FL88&q&limit=10&rating=g";
     console.log(queryURL)
          fetch(queryURL)
          .then(function (response) {
            return response.json(); 
          })
            .then(function (responseJson) {
                const results = responseJson.data;
                console.log(responseJson)
                for (let i = 0; i < results.length; i++) {

                if (results[i].rating === "r" || results[i].rating === "pg") {

                const gifDiv = document.createElement("div");

                const rating = results[i].rating;

                const p = document.createElement("p");

                      p.innerHTML = "Rating: " + rating;

                const personImage = document.createElement("img");

                personImage.setAttribute("src", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(personImage);

                document.getElementById("gifs-appear-here").prepend(gifDiv);
                }
            }
        });
    });
});


// need to set still and animate status on click event.