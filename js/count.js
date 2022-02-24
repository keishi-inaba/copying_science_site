// box1
$('#box1').on('inview', function(event, isInView) {
  if(isInView) {
    $('#box1 .count-up').each(function() {
      $(this).prop('Counter', 0).animate ({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });  
    });
  }
});

