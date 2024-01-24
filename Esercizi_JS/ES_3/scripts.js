function validateForm() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var nomeCognomeRegex = /^[A-Za-z]{1}[A-Za-z]{0,19}$/;
    if (!nomeCognomeRegex.test(nome) || !nomeCognomeRegex.test(cognome)) {
      alert("Il nome e il cognome devono iniziare con una lettera maiuscola e contenere solo lettere (massimo 20 caratteri).");
      return false;
    }
  
    var usernameRegex = /^[a-zA-Z0-9]{6,10}$/;
    if (!usernameRegex.test(username)) {
      alert("Lo username deve contenere solo caratteri alfanumerici, con lunghezza compresa tra 6 e 10 caratteri.");
      return false;
    }
  
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,10}$/;
    if (!passwordRegex.test(password)) {
      alert("La password deve contenere almeno 5 caratteri e massimo 10 caratteri, con almeno una lettera maiuscola, una lettera minuscola e due cifre.");
      return false;
    }
  
    var numeriCaratteri = password.replace(/[^0-9]/g, "").length;
    alert("Egregio " + nome + " " + cognome + ", abbiamo ricevuto i tuoi dati in modo corretto.\nLo username scelto è " + username + ", la tua password contiene " + numeriCaratteri + " cifre che soddisfano i requisiti minimi di sicurezza.");
    return true;
  }
  
  function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
  
  document.getElementById("submitBtn").addEventListener("click", validateForm);
  document.getElementById("resetBtn").addEventListener("click", resetForm);