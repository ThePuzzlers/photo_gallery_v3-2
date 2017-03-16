// implement a search
// the search schould listen to the form and respond on user input
// afterwards the data should be submitted in real time


// function printtwo( message ) {
//   var outputDiv = document.getElementById('gallery');
//   outputDiv.innerHTML = message;
// }

var searchResult = [];
var matchingImgTag = [];
var allImages = [];
var filteredImages = [];
var charCheck;
var deletingImages = [];
var loopCount = 0;
var selectedImage;
var imagesAlt;
var altSearch;
var searchPara;


function charLoop (charCheck, userSearch) { // function to check if EVERY char matches

  var trueCount = 0;

  for (y = 0; y < userSearch; y++) { // loop through the chars of EACH char in EACH image \ One image at a time
    if(selectedImage.charAt(y) == searchResult[y]){
      console.log(trueCount);

      // counter to check how many chars are matching
      trueCount = trueCount + 1;
      } else if (selectedImage.charAt(y) != userSearch[y]) {
      trueCount = trueCount + 0;
      }
    }
    return trueCount;
}



$( "#user-search" ).keydown(function( event ) { // function to check the user input

// check the user input for all charaters which can create a data input
  if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 111) || (event.keyCode >= 186 && event.keyCode <= 222)) {
    var letter = event.key;
    searchResult.push(letter.toLowerCase()); // push every character into an array
  }

// if backspace is pressed
    else if (event.keyCode == 8) {
        searchResult.pop(); // pop last character out of the array for the characters
      }


  if (searchResult.length >= 1) {
    $( "#gallery" ).empty(); // empty the id as soon as the user types in a letter | get rid of all displayed images


    for(i = 0; i < images.length; i++) { // loop through the images
      searchPara = searchResult.join("");

      imagesAlt = images[i].alt.toLowerCase();


      altSearch = imagesAlt.search(searchPara);


      // console.log(altSearch + 'HEEEEELLLOOO');
      if(altSearch >= 0) {  // check if the first char matchs with the first of user input
        imgSrc = images[i].imgSrc;
        thumbSrc = images[i].thumbSrc;
        alt = images[i].alt;

        imageListingSearch(imgSrc, thumbSrc, alt);
        print(imgStringSearch); // get the data and print them out

    } }
  } else if (searchResult.length == 0) { // if there is no user input
      for(i = -1; i <= filteredImages.length; i++) { // get rid of all images
        filteredImages.pop();
      }
        print(imgString); // print the start screen
      }


    ///////// All the code above just puts the related images in an array ONCE - this will handle all other steps!



    ///////// All the code underneath works with this selection and updates it

    // for the Gallery Plugin - do not touch! Needs to get loaded last - inside the function for the search field
    $('a[data-rel^=lightcase]').lightcase();
    filteredImages = [];
    imgStringSearch = [];
});


// for the Gallery Plugin - do not touch! Needs to get loaded last
$('a[data-rel^=lightcase]').lightcase();
