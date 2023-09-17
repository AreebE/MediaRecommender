var genreslist = [];
function display() {
  //document.getElementById("displayarea").innerHTML = document.getElementById("genres").value;
  var genre = document.getElementById("genres").value;
  const genreslist = genre.split(",");
  console.log(genreslist);
  //document.getElementById("displayarea1").innerHTML = document.getElementById("artists").value; 
  var artist = document.getElementById("artists").value;
  //console.log(artist);
  const artistslist = artist.split(",");
  console.log(artistslist);

  var similarsong = document.getElementById("similarsongs").value;
  //console.log(artist);
  const similarsonglist = similarsong.split(",");
  console.log(similarsonglist);
  var language = document.getElementById("languages").value;
  const languageslist = language.split(",");
  console.log(languageslist);
  var year = document.getElementById("years").value;
  yearslist = year.split("-");
  console.log(yearslist);
  //const tableuserinput = genre.split(",") + ". " + artist.split(",") + ". " + similarsong.split(",");
  //console.log(tableuserinput);
}
/*<tr style="background-color:#8FBC8F;">
        <td align="center"><b>Genres You Listed</b></td>
        <td align="center"><b>Authors You Listed</b></td>
        </tr> 
        <tr>
        <td align="center"><div id="displayarea"></div></td>
        <td align="center"><div id="displayarea1"></div></td>
        </tr>*/