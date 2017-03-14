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
var deletingImages = [];
var loopCount = 0;
var selectedImage;


function charLoop (charCheck, userSearch) {

  var trueCount = 0;

  for (y = 0; y < userSearch; y++) {
    if(selectedImage.charAt(y) == searchResult[y]){

      trueCount = trueCount + 1;
    } else if (selectedImage.charAt(y) != userSearch[y]) {
      trueCount = trueCount + 0;
    }

  }
  return trueCount;

  // if (trueCount == userSearch.length) {
  // }

}



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

        if(allImages[i].charAt(0) === searchResult[0]) {
        filteredImages.push(allImages[i]);
        }
      }
    }

    ///////// All the code above just puts the related images in an array ONCE



    ///////// All the code underneath works with this selection and updates it


console.log(filteredImages);


    charCheck = searchResult.length -1;
    var userSearch = searchResult.length;


        for(i = 0; i < filteredImages.length; i++) {
              selectedImage = filteredImages[i];
              trueCount = charLoop(charCheck, userSearch);

                if (trueCount === userSearch){
                  console.log('true');
                } else {
                  console.log('false');
                }
        }




//     console.log(filteredImages.length);
//     console.log('testing');
//
//     console.log(filteredImages);
//
//
//
// if (filteredImages.length > 0) {
//
//
//
//     for(i = 0; i < filteredImages.length; i++) {
//
//           if(filteredImages[i].charAt(charCheck) != searchResult[charCheck]) {
//             if (deletingImages.indexOf(filteredImages[i]) == -1){
//                 deletingImages.push(filteredImages[i]);
//             } else {
//               console.log('hello');
//             }
//     }
//
//     }
//
//
//
//     for (i = 0; i < deletingImages.length; i++) {
//       var imagePosition = filteredImages.indexOf(deletingImages[i]);
//
//
//       if (imagePosition != -1) {
//
//         filteredImages.splice(imagePosition, 1);
//
//       }
//     }
//   }
//
//
// // Checks the images array if images are inside, if not this code will be entered
// // The purpose is to be able to handle user misspelling
//   if (filteredImages.length === 0)  {
//
//       for(i = 0; i < deletingImages.length; i++) { // checks the delted images array
//           var checkDeletedImage = deletingImages[i];
//             for(y = 0; searchResult.length > y; y++ ) {
//               if(checkDeletedImage.charAt(y) == searchResult[y]) {
//                 loopCount++;
//                 if (loopCount == searchResult.length) {
//                   filteredImages.push(checkDeletedImage);
//                   loopCount = 0;
//                 }
//                 // console.log(checkDeletedImage);
//               } else {
//                 break;
//               }
//             }
//
//
//
//
//     }
//
//   }
//
//   console.log(filteredImages);
//
//
//

      //
      // if (imagePostions.length != 0) {
      //   var slicing = imagePostions.join();
      //   console.log(slicing);
      //
        // var testing = filteredImages.remove(0,2);
        // console.log(testing);
      // }



    //   for(i = 0; i < allImages.length; i++) {
    //     if(allImages[i].charAt(charCheck) === searchResult[charCheck]) {
    //     filteredImages.push(allImages[i]);
    // }

    //     else if(allImages[i].charAt(charCheck) != searchResult[charCheck]) {
    //     filteredImages.pop(allImages[i]);
    // }


    // console.log(filteredImages);


    //   var searchResultConcat = searchResult.join('');
    //  console.log(searchResultConcat);

    //
    //  console.log(deletingImages);
    // //  console.log(charCheck);



});
