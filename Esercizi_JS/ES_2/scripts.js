function checkForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "") {
      alert("Inserisci la username");
      return false;
    }
  
    if (password.length < 5 || password.length > 8) {
      alert("La password deve essere compresa tra 5 e 8 caratteri");
      return false;
    }
  
    alert("Accesso effettuato con successo!");
    return true;
  }
  
  function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
  
  document.getElementById("submitButton").addEventListener("click", checkForm);
  document.getElementById("resetButton").addEventListener("click", resetForm);