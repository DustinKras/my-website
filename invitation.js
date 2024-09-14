// Developer Comments: Declare variables to store the input field data
var recipientName;
var hostName;

// Add event listener for form submission
document.getElementById("invitationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // Get the values from input fields
    recipientName = document.getElementById("recipientNameInput").value;
    hostName = document.getElementById("hostNameInput").value;

    // Manipulate the DOM to replace placeholders with input values
    document.getElementById("recipientNamePlaceholder").innerHTML = recipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = hostName;
});