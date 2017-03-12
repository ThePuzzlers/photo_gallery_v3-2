// implement a search
// the search schould listen to the form and respond on user input
// afterwards the data should be submitted in real time



function print( message ) {
  var outputDiv = document.getElementById('gallery');
  outputDiv.innerHTML = message;
}


$( "#user-search" ).keydown(function( event ) {

      var searchResult = [];
      var matchingImgTag = [];

      if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 111) || (event.keyCode >= 186 && event.keyCode <= 222)) {
          var letter = event.key;
          searchResult.push(letter);
      }

      else if (event.keyCode == 8) {
          searchResult.pop();
      }

      for(i = 0; i < images.length; i++) {

          var imagesTag = images[i].tag;

          if(imagesTag.charAt(0) === searchResult[0] ) {
            matchingImgTag.push(imagesTag);
        }
      }

      console.log(matchingImgTag);


});
