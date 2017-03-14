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


function charLoop (charCheck, userSearch) { // function to check if EVERY char matches

  var trueCount = 0;

  for (y = 0; y < userSearch; y++) { // loop through the chars of EACH char in EACH image \ One image at a time
    if(selectedImage.charAt(y) == searchResult[y]){

      // counter to check how many chars are matching
      trueCount = trueCount + 1;
      } else if (selectedImage.charAt(y) != userSearch[y]) {
      trueCount = trueCount + 0;
      }
    }
    return trueCount;
}

// get all images out of the 'database' before the start
for(i = 0; i < images.length; i++) {
    var imagesTag = images[i].tag;
    allImages.push(imagesTag.toLowerCase());
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


    for(i = 0; i < allImages.length; i++) { // loop through the images
      if(allImages[i].charAt(0) === searchResult[0]) {  // check if the first char matchs with the first of user input
        if (filteredImages.indexOf(allImages[i]) == -1) { // check if the matching image is already in the filterd array
            filteredImages.push(allImages[i]); // if not push the image
        }
      }
    }
  } else if (searchResult.length == 0) { // if there is no user input
      for(i = -1; i <= filteredImages.length; i++) { // get rid of all images
        filteredImages.pop();
      }
        print(imgString); // print the start screen
      }


    ///////// All the code above just puts the related images in an array ONCE - this will handle all other steps!



    ///////// All the code underneath works with this selection and updates it


console.log(filteredImages);


    charCheck = searchResult.length -1; // decrease the searchResult by one so we will start on 0 instead of 1
    var userSearch = searchResult.length;


        for(i = 0; i < filteredImages.length; i++) { // loop through the filtered images
              selectedImage = filteredImages[i]; // store the active image
              trueCount = charLoop(charCheck, userSearch); // use the function to check if EVERY char matches

                if (trueCount === userSearch) { // do this if EACH char == to true before
                  for (z = 0; z < images.length; z++) { // loop through the images to get the different data
                    var imagesTagLowerCase = images[z].tag;
                        imagesTagLowerCase = imagesTagLowerCase.toLowerCase();
                        if (selectedImage === imagesTagLowerCase) { // compare the images and if they are equal go further


                            imgSrc = images[z].imgSrc;
                            thumbSrc = images[z].thumbSrc;
                            alt = images[z].alt;

                            imageListingSearch(imgSrc, thumbSrc, alt);
                            print(imgStringSearch); // get the data and print them out
                          }

                        }


                } else {
                  // filteredImages.splice(filteredImages[i], 1)
                  console.log(filteredImages[i] + 'FALSE');
                }
        }


    imgStringSearch = ''; //reset the string so each item will just displayed once

    // for the Gallery Plugin - do not touch! Needs to get loaded last - inside the function for the search field
    $('a[data-rel^=lightcase]').lightcase();

});


// for the Gallery Plugin - do not touch! Needs to get loaded last
$('a[data-rel^=lightcase]').lightcase();
