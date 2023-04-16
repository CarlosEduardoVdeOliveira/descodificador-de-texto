const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


function encryptText(){
   const textareaValue = elementTextarea.value;
   
   if ( textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${textareaValue}</textarea>
         <button class="button-copy" id='copy'>Copiar</button>
      `;

   }
   return alert("Preencha o campo!")
}

function decryptText(){
  /*  const textareaValue = elementTextarea.value;
   if ( textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text");
      areaCryption.innerHTML = `
         <textarea class="textarea-output">${textareaValue}</textarea>
         <button class="button-copy" id="copy">Copiar</button>
      `;

   }
   return alert("Preencha o campo!") */
   elementTextarea.select();
   document.execCommand('copy')
}
const buttonCopy = document.querySelector("#copy");
function copyText(){
   const textareaOutput = document.querySelector('textarea .textarea-output');
   textareaOutput.select();
   document.execCommand('copy')
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);
buttonCopy.addEventListener('click', copyText);

/**
 * a b c d e f g h i j k l m n o p q r s t u v w x y z
 * jhysvz
 * carlos
 */