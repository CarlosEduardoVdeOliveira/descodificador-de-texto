const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");
const buttonCopy = document.querySelector("#copy");

function encryptText(){
   const textareaValue = elementTextarea.value;
   
   if ( textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output">${textareaValue}</textarea>
         <button class="button-copy" id='copy'>Copiar</button>
      `;

   }
   return alert("Preencha o campo!")
}

function decryptText(){
   console.log('decryptoText OK');
   /* const textareaValue = elementTextarea.value;
   if ( textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text");
      areaCryption.innerHTML = `
         <textarea class="textarea-output">${textareaValue}</textarea>
         <button class="button-copy">Copiar</button>
      `;

   }
   return alert("Preencha o campo!") */
}

function copyText(){
   alert("CUUUUUUU")
   /* const textareaOutput = document.querySelector('textarea .textarea-output');
   textareaOutput.select();
   document.execCommand('copy'); */
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);
buttonCopy.addEventListener('click', copyText);

