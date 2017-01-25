// Random word
$('#random-word').on('click', function(evt) {
  $.ajax({
    url: '/randomword',
    method: 'GET'
  }).then(function(res) {
    $('#word').text(res.word);
  });
});

// Random user
$('#random-user').on('click', function(evt) {
  $.ajax({
    url: '/randomuser',
    method: 'GET'
  }).then(function(res) {
    const user = res;
    $('#user-name').text('Name: ' + user.name.title +' '+ user.name.first +' '+ user.name.last);
    $('#user-gender').text('Gender: ' + user.gender);
    $('#user-dob').text('DOB: ' + user.dob);
    $('#user-cell').text('Cell: ' + user.cell);
    $('#user-email').text('E-Mail: ' + user.email);
    $('#user-picture').html('Picture: ' + '<img src="' + user.picture.thumbnail + '">');
  });
});

// Game
$('#game-start').on('click', function(evt) {
  $.ajax({
    url: '/trivia',
    method: 'GET'
  }).then(function(res) {
    console.log(res);
    $('#questions').text(res);
  });
});
