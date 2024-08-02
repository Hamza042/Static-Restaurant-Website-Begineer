function Orderload() {
    // Get form values
    var Name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("event-date").value;
    var event = document.getElementById("event-type").value;
    var message = document.getElementById("message");
    // Get the value of the textarea
    var textareaValue = message.value;

    // Convert the value to a string
    var stringValue = JSON.stringify(textareaValue);
    
    // Validate form values
    if (Name == "") {
      alert("name is required.");
      return;
    }
    
    if (email == "") {
      alert("Email is required.");
      return;
    }
    if (phone == "") {
        alert("Phone is required.");
        return;
      }
    if (date == "") {
        alert("Date is required.");
        return;
      }
      if (message == "") {
        alert("Details are required.");
        return;
      }
    // Save form values to local storage
    var FName = localStorage.setItem("Name", Name);
    var EmailId =localStorage.setItem("Email", email);
    var Phoneno = localStorage.setItem("Phoneno", phone);
    var Date = localStorage.setItem("Date", date);
    var Event = localStorage.setItem("Event", event);
    var Message = localStorage.setItem("Feedback",stringValue);

  
  // Show success message
  alert("Order Submitted successfully!");
  
  }
  
  