
//* adds & removes responsive class to/from top nav when icon is clicked. */
function myFunction() {
    var x = document.getElementById("topnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }