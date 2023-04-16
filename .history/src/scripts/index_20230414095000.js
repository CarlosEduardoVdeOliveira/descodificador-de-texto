const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");




function encryptText() {   
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output">${(textareaValue)}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
      `;

   }
   return alert("Preencha o campo!")
}

function decryptText() {
   /*    const textareaValue = elementTextarea.value;
      if ( textareaValue.length > 0) {
         areaCryption.classList.add("text-cryption-whit-text");
         areaCryption.innerHTML = `
            <textarea class="textarea-output">${textareaValue}</textarea>
            <button class="button-copy" id="copy">Copiar</button>
         `;
   
      }
      return alert("Preencha o campo!") */
}
/* const buttonCopy = document.querySelector("#copy"); */

async function copyText() {
   const textareaOutput = document.querySelector('.textarea-output');
   await textareaOutput.select();
   document.execCommand('copy');
   alert("Texto copiado para area de trasferência!");
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);
/* buttonCopy.addEventListener('click', copyText); */


/**
 * a b c d e f g h i j k l m n o p q r s t u v w x y z
 * r s t u v w x y z a b c d e f g h i j k l m n o p q
 * jhysvz
 * carlos
 * 97 até 122
 * a  ==  j
 * 97 == 106
 * se o codigo for igual a 97 ele recebe j
 * se ele for igual a 122 ele recebe 113
 */



function cifraCesar(value){
   let cryptograph = 0
   let newValue = ''
   for (let i = 0; i < value.length; i++) {
      if(value.charCodeAt(i) >= 97 && 
         value.charCodeAt(i) <= 122 || 
         value.charCodeAt(i) === 32){
         i = Number(value.charCodeAt(i)) + 10
         cryptograph += value.charCodeAt(i);
         newValue += value.charAt(i).toLowerCase()
         
      }
   }
   return {cryptograph, newValue, value}
}
console.log(cifraCesar('avalue jvalue'))