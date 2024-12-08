function showData(){
    const CITY = localStorage.getItem("city");
    document.getElementById("city").innerHTML = CITY;

    const EMAIL = localStorage.getItem("email");
    document.getElementById("email").innerHTML = EMAIL;

    const MESSAGE = localStorage.getItem("message");
    document.getElementById("message").innerHTML = MESSAGE;
  }

  showData();