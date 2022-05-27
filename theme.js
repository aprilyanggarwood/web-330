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
