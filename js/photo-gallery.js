

var imgString = '';
var imgSrc;
var thumbSrc;
var alt;


function print( message ) {
  var outputDiv = document.getElementById('gallery');
  outputDiv.innerHTML = message;
}


function imageListing(imgSrc, thumbSrc, alt) {

  imgString += '<li><a href="' + imgSrc + '" data-rel="lightcase:myCollection"><img src="' + thumbSrc + '" alt="' + alt + '"></a></li>'

  return imgString;
}


// what's always equal?
// <li><a href="" data-rel="lightcase:myCollection"><img src="" alt=""></a></li>
// what's changing?
// tag alt thumbSrc imgSrc

// Get the length of the images array
// Loop through each item and pull out the informations needed
// Create a string with the informattions



for (i = 0; i < images.length; i++) {

  imgSrc = images[i].imgSrc;
  thumbSrc = images[i].thumbSrc;
  alt = images[i].alt;

  imageListing(imgSrc, thumbSrc, alt);

}



print(imgString);





// for the Gallery Plugin - do not touch! Needs to get loaded last
$('a[data-rel^=lightcase]').lightcase();
