function convertir(){
    let centigrados = parseFloat(document.getElementById('centigrados').value);

            if (!isNaN(centigrados)) {
                let fahrenheit = (centigrados * 9/5) + 32;

                document.getElementById('resultado').innerHTML = "Tus " +centigrados+ " grados centigrados es equivalente a " +fahrenheit+ " Fahrenheit.";
            } else {

                document.getElementById('resultado').innerHTML = 'Introduce un numero valido';
            }
        }