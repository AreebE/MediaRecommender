var genreslist =[];
var ratings = [];
function display() {
      //document.getElementById("displayarea").innerHTML = document.getElementById("genres").value;
      var genre = document.getElementById("genres").value;
      //console.log(genre);
      const genreslist = genre.split(",");
      console.log(genreslist);
      //document.getElementById("displayarea1").innerHTML = document.getElementById("actors").value; 
      var actor = document.getElementById("actors").value;
      //console.log(actor);
      const actorslist = actor.split(",");
      console.log(actorslist);
      //document.getElementById("displayarea1").innerHTML = document.getElementById("directors").value; 
      var director = document.getElementById("directors").value;
      //console.log(director);
      const directorslist = director.split(",");
      console.log(directorslist);
      //const tableuserinput = genre.split(",") + ". " + actor.split(",") + ". " + director.split(",");
      //console.log(tableuserinput);
    }
/*<tr style="background-color:#8FBC8F;">
    <td align="center"><b>Genres You Listed</b></td>
    <td align="center"><b>Actors You Listed</b></td>
    </tr> 
    <tr>
    <td align="center"><div id="displayarea"></div></td>
    <td align="center"><div id="displayarea1"></div></td>
    </tr>*/


window.onload=function(){
    document.getElementById("ratingForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Collect and process the ratings
            ratings = [];

            // Loop through the form elements
            var elements = this.elements;
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element.type === "number" && element.name !== "numRec") {
                    var rating = parseInt(element.value, 10);

                    // Check if the rating is within the valid range (1 to 10)
                    if (rating >= 1 && rating <= 10) {
                        ratings.push(rating);
                    } else {
                        //alert("Please enter a rating between 1 and 10.");
                        return; // Exit the function if an invalid rating is found
                    }
                }
            }

            // Display or further process the collected ratings here
            console.log("User Ratings:", ratings);
          console.log(ratings[1]);
        });
}
var all_inputs = [];
all_inputs = ratings.concat(genreslist);
console.log(all_inputs); 
