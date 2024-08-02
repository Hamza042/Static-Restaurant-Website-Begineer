$(document).ready(function() {
    // handle form submission
    $('form').submit(function(event) {
      event.preventDefault(); // prevent the form from being submitted
  
      // get the form data
      var formData = {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'phone': $('#phone').val(),
        'eventDate': $('#event-date').val(),
        'eventType': $('#event-type').val(),
        'message': $('#message').val()
      };
  
      // send the form data to the catering company
      $.ajax({
        type: 'POST',
        url: '/book-catering',
        data: formData,
        dataType: 'json',
        encode: true
      })
        .done(function(data) {
          // show a success message
          $('form').html('<p>Thank you for booking our catering service! We will be in touch shortly to confirm your booking and discuss the details of your event.</p>');
        });
    });
  });
  