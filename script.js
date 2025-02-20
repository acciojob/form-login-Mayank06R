document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the input values
    var firstName = document.querySelector('input[name="fname"]').value.trim();
    var lastName = document.querySelector('input[name="lname"]').value.trim();

    // Display the full name using an alert
    alert(firstName + ' ' + lastName);
});
