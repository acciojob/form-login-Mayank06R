function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    let firstName = document.querySelector("input[name='fname']").value.trim();
    let lastName = document.querySelector("input[name='lname']").value.trim();
    
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }
    
    alert(firstName + " " + lastName);
}

// Attach event listener to form submission
document.getElementById("form1").addEventListener("submit", getFormvalue);
