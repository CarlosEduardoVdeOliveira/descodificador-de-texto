const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


function cifraCesar(value){
   for (let codePoint of value) {
      if(codePoint.codePointAt(0) === 97){
         return value.charAt(0)
      }else{
         return value.charAt(0)
      }
   }
}
console.log(cifraCesar('a'))
console.log(cifraCesar('j'))

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
 * jhysvz
 * carlos
 */


