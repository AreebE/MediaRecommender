/*var myAudio = new Audio('bgm.mp3');
myAudio.play(); */
//var genreslist = [];
gptInput = [];
var genreslist = [];
var themeslist = [];
var authorslist = [];
var languageslist = [];
var yearslist = [];
var booklength;
var reclist = [];
var ratings = [];
function display() {
  //document.getElementById("displayarea").innerHTML = document.getElementById("genres").value;
  var genre = document.getElementById("genres").value;
  genreslist = genre.split(",");
  //console.log(genre);
  //temp1.unshift(genre.split(","));
  //console.log(temp1);
  //console.log(genreslist);
  var theme = document.getElementById("themes").value;
  themeslist = theme.split(",");
  //console.log(themeslist);
  //document.getElementById("displayarea1").innerHTML = document.getElementById("authors").value; 
  var author = document.getElementById("authors").value;
  //console.log(author);
  authorslist = author.split(",");
  //console.log(authorslist);
  var language = document.getElementById("languages").value;
  languageslist = language.split(",");
  //console.log(languageslist);
  var year = document.getElementById("years").value;
  yearslist = year.split("-");
  //console.log(yearslist);
  booklengthoptions = document.getElementsByName("booklength");
  for (var i=0; i<booklengthoptions.length; i++)
    {
      if(booklengthoptions[i].checked){
         booklength=booklengthoptions[i].value;
      }
    }
  
  var rec = document.getElementById("recommendations").value;
    reclist = rec.split(",");
  
  //console.log(reclist);
  genresforcomb = genreslist;
  return genresforcomb;

}


window.onload = function() {
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
      console.log("f");
    gptInput = [genreslist, themeslist, authorslist, languageslist, yearslist, booklengthoptions, ratings[0], ratings[1]];
    loadItems(document.getElementById("recommendations").value, "Books", gptInput, document)
  });
  
}


//var all_inputs = [];
//all_inputs = ratings.concat(genreslist);
//console.log(all_inputs); 

//console.log(gptInput);
