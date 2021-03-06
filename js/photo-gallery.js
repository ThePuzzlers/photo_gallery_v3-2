// what's always equal?
// <li><a href="" data-rel="lightcase:myCollection"><img src="" alt=""></a></li>
// what's changing?
// tag alt thumbSrc imgSrc

// Get the length of the images array
// Loop through each item and pull out the informations needed
// Create a string with the informattions


var imgString = ''; // to hold the final string
var imgSrc;
var thumbSrc;
var alt;
var backupString = '';


// to print out in DIV
function print( message ) {
  var outputDiv = document.getElementById('gallery');
  outputDiv.innerHTML = message;
}


// creates a string with the certain values of the images before user input
function imageListing(imgSrc, thumbSrc, alt) {
  imgString += '<li><a href="' + imgSrc
  imgString += '" data-rel="lightcase:myCollection"><img src="' + thumbSrc
  imgString += '" alt="' + alt + '"></a></li>'
  return imgString;
}



// loops through the array and gets the data from the objects
for (i = 0; i < images.length; i++) {

  imgSrc = images[i].imgSrc;
  thumbSrc = images[i].thumbSrc;
  alt = images[i].alt;

  imageListing(imgSrc, thumbSrc, alt); // send it to the function so the string can get created
}


// print out the final string
print(imgString);
backupString = imgString; // to get the string back without user input
imgString = []; //reset the string once the page is printed out


// for the Gallery Plugin - do not touch! Needs to get loaded last - inside the function for the search field
$('a[data-rel^=lightcase]').lightcase();
