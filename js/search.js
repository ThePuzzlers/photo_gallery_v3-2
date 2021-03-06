// implement a search
// the search schould listen to the form and respond on user input
// afterwards the data should be submitted in real time

var searchResult = [];
var imagesAlt;
var altSearch;
var searchPara;
var letter;


$( "#user-search" ).keydown(function( event ) { // function to check the user input

// check the user input for all charaters which can create a data input
  if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 111) || (event.keyCode >= 186 && event.keyCode <= 222)) {
    letter = event.key;
    searchResult.push(letter.toLowerCase()); // push every character into an array, set to lowerCase
  }

// if backspace is pressed
    else if (event.keyCode == 8) {
        searchResult.pop(); // pop last character out of the array for the characters
      }

      searchPara = searchResult.join(""); // join the userInput Array


  if (searchResult.length >= 1) {
    $( "#gallery" ).empty(); // empty the id as soon as the user types in a letter | get rid of all displayed images

    var imagesCount = 0; // check if images were found

    for(i = 0; i < images.length; i++) { // loop through the images

      imagesAlt = images[i].alt.toLowerCase(); // set everything to LowerCase to match with user Input

      altSearch = imagesAlt.search(searchPara); // now search the whole alt string for matching char in the right order


      if(altSearch >= 0) {  // check if there are matching chars and print the images to the page
        imgSrc = images[i].imgSrc;
        thumbSrc = images[i].thumbSrc;
        alt = images[i].alt;

        imageListing(imgSrc, thumbSrc, alt);
        print(imgString); // get the data and print them out

        imagesCount += 1;
    }
  } if (imagesCount == 0) { print('<div id="alien"></div>');
    }


  } else if (searchResult.length == 0) { // if there is no user input
        print(backupString); // print the start screen
      }

    // for the Gallery Plugin - do not touch! Needs to get loaded last - inside the function for the search field
    $('a[data-rel^=lightcase]').lightcase();
    filteredImages = [];
    imgString = [];
});
