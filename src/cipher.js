const cipher = {
  encode: function (numeroSaltos, palabraSimple,) {
    let palabraFinal= '';
    for (let a=0; a<palabraSimple.length; a++){
      let codAscii = palabraSimple.charCodeAt(a);
      if (codAscii >=65 && codAscii<= 90) {
        let cifradoCesar = ((codAscii - 65 + parseInt(numeroSaltos)) % 26 + 65)
        let newAscii = String.fromCharCode(cifradoCesar)
        palabraFinal+=newAscii
      }
      else {
        palabraFinal = palabraFinal + palabraSimple[a];
      }
    }
    return palabraFinal;
  },

  decode: function (numeroModif, palabraCod) {
    let mnsjFinal2= '';
    for (let i=0; i<palabraCod.length; i++){
      let codAscii2 = palabraCod.charCodeAt(i);
      if (codAscii2 >=65 && codAscii2 <=90) {
        let cipherCesar = ((codAscii2 - 90 - parseInt(numeroModif)) % 26 + 90)
        let newAscii2 = String.fromCharCode(cipherCesar)
        mnsjFinal2+=newAscii2
      } 
      else {
        mnsjFinal2 = mnsjFinal2 + palabraCod[i];
      }

    }
      
    return mnsjFinal2;

  }

};
  
export default cipher;
