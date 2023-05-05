const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

/* buttonDecryption.setAttribute("disabled", ''); */

// Cifra de César
function cipherOfCesar(text, jump){
   let cryptograph = ''
   for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i)
      if(charCode >= 97 && charCode <= 122){
         charCode = ((charCode - 97 + jump) % 26) + 97
      }
      cryptograph += String.fromCharCode(charCode);
   }
   return cryptograph
}

function rendersEncryptedTextAndCopyButton(callback){
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      /* disabledButtonDecrypt() */
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${callback}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
         
      }
   return alert("Preencha sua mensagem!");
   
}

function encryptText() {
   const textareaValue = elementTextarea.value;
   rendersEncryptedTextAndCopyButton(
      cipherOfCesar(textareaValue, 5));
}



/* function disabledButtonDecrypt(){
   buttonDecryption.removeAttribute("disabled");
   buttonDecryption.style.cursor = 'pointer';
} */


function decryptText() {
   const textareaValue = elementTextarea.value;
   rendersEncryptedTextAndCopyButton(
      cipherOfCesar(textareaValue, -5));
}


function copyText() {
   const textareaOutput = document.querySelector('.textarea-output');
   textareaOutput.removeAttribute('disabled');
   textareaOutput.select();
   document.execCommand('copy');
   alert("Texto copiado para área de trasferência!");
   textareaOutput.setAttribute('disabled', '')
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);
