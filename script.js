  // Get the input field
var input = document.getElementById("input_area");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();
    // var x = document.getElementsByClassName("to_do_list")[0].childElementCount;
    var itm = document.getElementsByClassName("input-icons");

    var cln = itm[0].cloneNode(true);
    cln.checked = false;
    document.getElementsByClassName("to_do_list")[0].prepend(cln);

    // console.log(x);
  }
});

function check_uncheck() {
  if (document.getElementById("radio-button").checked == true)
    document.getElementById("radio-button").checked = false;
  else {
    document.getElementById("radio-button").checked = true;
  }
}