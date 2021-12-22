// Get the input field
var input = document.getElementById("input_area");

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    var itm = document.getElementsByClassName("input-icons");

    var cln = itm[0].cloneNode(true);
    cln.checked = false;
    cln.innerHTML += "<button class='del-button'>DEL</button>"
    document.getElementsByClassName("to_do_list")[0].prepend(cln);
  }
});

function check_uncheck() {
  if (document.getElementById("radio-button").checked == true)
    document.getElementById("radio-button").checked = false;
  else {
    document.getElementById("radio-button").checked = true;
  }
}

var themeButton = document.getElementById("fs");

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("fs", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("fs") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("fs") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("fs").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("fs").checked = true;
  }
})();
