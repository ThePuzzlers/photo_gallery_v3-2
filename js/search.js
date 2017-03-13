// implement a search
// the search schould listen to the form and respond on user input
// afterwards the data should be submitted in real time



function print( message ) {
  var outputDiv = document.getElementById('gallery');
  outputDiv.innerHTML = message;
}

var searchResult = [];
var matchingImgTag = [];
var allImages = [];
var filteredImages = [];
var charCheck;


for(i = 0; i < images.length; i++) {


    var imagesTag = images[i].tag;
    allImages.push(imagesTag.toLowerCase());
}

$( "#user-search" ).keydown(function( event ) {




      if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 111) || (event.keyCode >= 186 && event.keyCode <= 222)) {
          var letter = event.key;
          searchResult.push(letter.toLowerCase());
      }

      else if (event.keyCode == 8) {
          searchResult.pop();
      }

      if (searchResult.length == 1) {


      for(i = 0; i < allImages.length; i++) {

        if(allImages[i].charAt(0) === searchResult[0] && filteredImages.indexOf(searchResult) == -1) {
        filteredImages.push(allImages[i]);
        }
      }
    }


    // charCheck = searchResult.length;
    //
    // for(i = 0; i < filteredImages.length; i++) {
    //
    //   if(filteredImages[i].charAt(charCheck) != searchResult[charCheck]) {
    //   filteredImages.pop(filteredImages[i]);
    //   }
    // }


    //   for(i = 0; i < allImages.length; i++) {
    //     if(allImages[i].charAt(charCheck) === searchResult[charCheck]) {
    //     filteredImages.push(allImages[i]);
    // }

    //     else if(allImages[i].charAt(charCheck) != searchResult[charCheck]) {
    //     filteredImages.pop(allImages[i]);
    // }


    console.log(filteredImages);


      var searchResultConcat = searchResult.join('');
     console.log(searchResultConcat);

     console.log(charCheck);


});
