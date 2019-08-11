const wrestlers = ["hulk hogan","andre the giant","mr perfect","the rock","roudy piper","vince mcmahon","jake the snake roberts","the ultimate warrior","the undertaker","sean michaels" ]


function renderButtons() {

        
        document.getElementById("buttons-view").innerHTML = "";

        
        for (let i = 0; i < wrestlers.length; i++) {

         
          const a = document.createElement("button");
          a.classList.add("wrestler");
          a.setAttribute("data-name", wrestlers[i]);
          a.innerHTML = wrestlers[i];
          document.getElementById("buttons-view").append(a);

        
        }
      }

      document.getElementById("add-wrestler").addEventListener("click", function(event) {
        event.preventDefault();

        let wrestler = document.getElementById("wrestler-input").value.trim();

        wrestlers.push(wrestler);
        console.log(wrestlers);

        renderButtons();
      });

      renderButtons();