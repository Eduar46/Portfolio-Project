function validateForm() {
    let name = document.querySelector("name").value;
    let email = document.querySelector("email").value;
    let message = document.querySelector("message").value;
    let number = document.querySelector("phone").value

    if (name.trim() == "" || email.trim() == "" || message.trim() == "" || number.trim() == "") {
        alert("Please fill in all fields.")
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
