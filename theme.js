/**
    Title: theme.js
    Author: April Yang
    Date: 5/27/21
    Description: Uses localStorage to set and get items for toggling the body theme 
 */

/**
 * Reference: https://www.w3schools.com/jsref/prop_win_localstorage.asp ( Set and retrieve localStorage name/value pair)
 * Set the default theme to light if one has not been set in the browsers localStorage
 */

setDefaultTheme();
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme"; // Retrieve value
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off"; // Retrieve value
  const iconText = localStorage.getItem("iconText") || "Light Mode"; // Retrieve value

  // Set up the theme, iconMode, and iconText
  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode); // adds the class element "iconMode" to the classList
  document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

function toggleMode(X) {
  let colorTheme = document.body.classList; // get the body's CSS class
  let iconMode = X.classList; // get the current classes assigned to the triggered button
  console.log(colorTheme); //testing purposes
  // console.log(iconMode); //testing purposes
  /**
   * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
   * local storage.
   * Light theme is the default theme
   */
  if (colorTheme.value === "light-theme") {
    localStorage.clear();
    localStorage.setItem("mode", "dark-theme");
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode");

    console.log(localStorage);
  } else {
    /**
     * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
     * local storage.
     */
    localStorage.clear();
    localStorage.setItem("mode", "light-theme");
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");
  }

  // Apply the updated selection to the HTML page elements
  colorTheme.value = localStorage.getItem("mode");
  iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
  document.getElementById("icon-text").innerHTML =
    localStorage.getItem("iconText");
}
