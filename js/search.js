// implement a search
// the search schould listen to the form and respond on user input
// afterwards the data should be submitted in real time

var searchResult = [];


function print( message ) {
  var outputDiv = document.getElementById('gallery');
  outputDiv.innerHTML = message;
}


$( "#user-search" ).keydown(function( event ) {


      if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 111) || (event.keyCode >= 186 && event.keyCode <= 222)) {
          var letter = event.key;

          searchResult.push(letter);

      }

      else if (event.keyCode == 8) {
          searchResult.pop();

      }

      var searchResultConcat = searchResult.join('');
      console.log(searchResultConcat);

      // console.log(event);


      // if (key === 'Backspace') {
      //   console.log('Backspace');
      // }
    // searchResult += letter;

    // console.log(letter);


});
