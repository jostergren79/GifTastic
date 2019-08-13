
//------------- Variables, Buttons,  Gifs-------------------------//


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

renderGif();

    
    document.getElementById("add-wrestler").addEventListener("click", function(event) {

        event.preventDefault();

        let wrestler = document.getElementById("wrestler-input").value.trim();
        
        wrestlers.push(wrestler);
        
   
        renderButtons(); 

        renderGif();
    });

// ---------------------------fetch giphyapi for rending ratings and gifs----------------------------- //

function renderGif() {

     document.querySelectorAll("button").forEach(function (button) {

        button.addEventListener("click", function (event) {  
          
            let wrestlerQuery = event.target.getAttribute("data-person");

            let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0R2seTXc9SmksHcymZzrTgcyC2E9FL88&q="+ wrestlerQuery + "&limit=10&offset=0&rating=G&rating=PG&rating=PG-13&lang=en"
            
        fetch(queryURL)

            .then(function (response) {
                return response.json(); 
            })
            .then(function (responseJson) {
                const results = responseJson.data;

            for (let i = 0; i < results.length; i++) {

                const gifDiv = document.createElement("div");

                const personImage = document.createElement("img");

                personImage.setAttribute("src", results[i].images.original_still.url);
                
                personImage.setAttribute("data-still", results[i].images.original_still.url)

                personImage.setAttribute("data-animate", results[i].images.original.url)

                personImage.setAttribute("data-state", "still") 

                personImage.addEventListener("click", function (event) {
                
                        console.log("you clicked")
                
                        let state = event.target.getAttribute("data-state");
                    
                        if (state === "still") {
                
                        event.target.setAttribute("src", event.target.getAttribute("data-animate"));
                
                        event.target.setAttribute("data-state", "animate");
                
                        } else {
                
                        event.target.setAttribute("src", event.target.getAttribute("data-still"));
                
                        event.target.setAttribute("data-state", "still");
                
                        }
                    });

                const rating = results[i].rating;

                const p = document.createElement("p");

                    p.innerHTML = "Rating: " + rating;

                gifDiv.append(p);
                gifDiv.append(personImage);

                document.getElementById("gifs-appear-here").prepend(gifDiv);

                }
            });
        });
    });
}

// ---------------------------gif state stuff not workng--------------------------//



document.querySelectorAll(".gif").forEach(function (img) {

    img.addEventListener("click", function (event) {

        console.log("you clicked")

        let state = event.target.getAttribute("data-state");
    
        if (state === "still") {

        event.target.setAttribute("src", event.target.getAttribute("data-animate"));

        event.target.setAttribute("data-state", "animate");

        } else {

        event.target.setAttribute("src", event.target.getAttribute("data-still"));

        event.target.setAttribute("data-state", "still");

        }
    });
});


//-----------------------user add favorites-------------------------------//




//------------------------integrate omdb api------------------------------//




