# Neighborhood-Map

## Description
- This is a single-page web application that displays a list of art museums, dynamically pulled from FOURSQUARE, using the <a href="https://developer.foursquare.com/places-api" target="_blank">FOURSQUARE Places API</a>, and the <a href="https://developers.google.com/maps/documentation/" target="_blank">Google Maps API</a> To run the application locally, simply clone or download the repository and open *index.html* in a web browser.

## Code
All of the code is comprised of three files
- `index.html` is the primary file which displays the basic layout, and is used to make the application run.
- `style.css` is the CSS file which styles MOST of the document. It utilizes flexbox to make the page responsive. The map styling is done in the index.js. I'm working on integrating the style in a separate `styles.json` document, but am having trouble making it function properly.
- `index.js` contains all of the javascript necessary to make the site function. It also makes use of jQUery (1.12.4) and Knockout.js (3.4.2).

## Functionality
- Pins
    - The map dynamically populates pins, based on the location the view is set to.
    - Each pin is clickable, showing a bouncing animation, and displaying a picture, as well as the address of the location.
    - Each pin also displays the FOURSQUARE logo.
