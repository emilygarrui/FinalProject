function listenForValidation() {
    const TOUR_FORM = document.getElementById("tour-form");
    TOUR_FORM.addEventListener("submit", validateTourForm);
}

function validateTourForm(e) {
    const CITY = e.target.city.value;
    const EMAIL = e.target.email.value;
    const MESSAGE = e.target.message.value;

    let valid = true;

    if (!CITY) {
        document.getElementById("form-city").style.visibility = "visible";
        valid = false; 
    } else {
        document.getElementById("form-city").style.visibility = "hidden";
    }

    if (!EMAIL) {
        document.getElementById("form-email").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("form-email").style.visibility = "hidden";
    }

    if (!MESSAGE) {
        document.getElementById("form-message").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("form-message").style.visibility = "hidden";
    }

    if (!valid) {
        e.preventDefault();
    } else {
        saveData(CITY, EMAIL, MESSAGE);
    }
}

function saveData(city, email, message) {
    localStorage.setItem("city", city);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
}
listenForValidation();
