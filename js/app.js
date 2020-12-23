/*global console*/
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navList = document.getElementById('navbar__list');
let sectionsList = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let fragment = document.createDocumentFragment();
sectionsList.forEach(elem => {
    let textLink = elem.getAttribute('data-nav');
  let newLi = document.createElement('li');
  let newLink = document.createElement('a');
  let newText = document.createTextNode(textLink);
  newLink.appendChild(newText);
  newLi.appendChild(newLink);
  fragment.appendChild(newLi);
});
navList.appendChild(fragment);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active