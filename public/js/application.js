$(document).ready(function(){

  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/grandma',
      data: $(this).serialize()
    }).done(function(response){
      $('#grandma_says').text(response);
    });
  });
});
