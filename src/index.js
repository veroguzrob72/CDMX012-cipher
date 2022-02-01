import cipher from './cipher.js';

const botonCifrar = document.getElementById('btnCipher');
    botonCifrar.addEventListener('click', function () {
        let palabraSimple = document.getElementById('wordSimple').value.toUpperCase();
        let numeroSaltos = document.getElementById('numberCod').value;
        let palabraCifrada = document.getElementById('wordCipher');
            palabraCifrada.innerHTML = cipher.encode(numeroSaltos, palabraSimple)
                    
   }  

)

const botonDecifrar = document.getElementById('btndecipher');
    botonDecifrar.addEventListener('click', function () {
        let palabraCod = document.getElementById('wordCod').value.toUpperCase();
        let numeroModif = document.getElementById('numberCod2').value;
        let palabraDecifrada = document.getElementById('message');
            palabraDecifrada.innerHTML = cipher.decode(numeroModif, palabraCod)
                    
   }  

)