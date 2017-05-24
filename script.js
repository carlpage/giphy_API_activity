$(document).on('click', '#search', function() {

  var input = $('#input').val();
  var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';

  if (input === '' || undefined) {
    alert("Don't forget your search!");
  } else {
    $.ajax({
      url: searchUrl,
      dataType: 'JSON',
      type: 'GET',
      success: function(response) {
        var url = response.data[0].images.downsized.url;
        var button = "<p><button type= button id='remove'>Remove</button>";
        var addFav = "<button type= button id='addFav'>Add to favorites</button>";
        $('.results').append('<img src=' + url + '>');
        $('.results').append(button);
        $('.results').append(addFav);
        console.log('successful API hit: ', response);
      }
    });
  } // end ajax

  function reset() {
    document.getElementById("input").value = "";
  }
  reset();

  $('.results').on('click', '#remove', function() {
    $(this).parent().parent().remove();
  });

  $('.results').on('click', '#addFav', function() {
    $(this).parent().appendTo('.favorites');
    $(this).remove();
  });

  function searchResponse(response) {
    console.log('back from search:', response.Search);
  } //end response
}); // end search button
