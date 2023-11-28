
    function convertir() {

    let euroCantidad = parseFloat(document.getElementById("euroCantidad").value);

      let euroD = 1.10;
    
      let dolar = (euroCantidad * euroD);

      document.getElementById("resultado").innerHTML = " Tus " + euroCantidad + " euros a dolares es: " + dolar + " Dolares.";
    }