function load() {
    // Get form values
    var Name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var rating = document.getElementById("ratingSelect").value;
    var feedback = document.getElementById("feedbackTextarea");
    // Get the value of the textarea
    var textareaValue = feedback.value;

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
    if (feedback == "") {
        alert("Email is required.");
        return;
      }
    
    // Save form values to local storage
    var FName = localStorage.setItem("Name", Name);
    var EmailId =localStorage.setItem("Email", email);
    var Rating = localStorage.setItem("Rating", rating);
    var Message = localStorage.setItem("Feedback",stringValue);

  
  // Show success message
  alert("Feedback Submitted successfully!");
  
  }
  
  