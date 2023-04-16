/* document.addEventListener('DOMContentLoaded', function() {
   const elementTextarea = document.querySelector("textarea");
   const areaCryption = document.querySelector(".text-cryption");
   const buttonCryptography = document.querySelector(".button-cryptography");
   const buttonDecryption = document.querySelector(".button-decryption");
   const buttonCopy = document.querySelector(".button-copy-cryption");

   function encryptText(){
      const textareaValue = elementTextarea.value;
      
      if ( textareaValue.length > 0) {
         areaCryption.classList.add("text-cryption-whit-text")
         areaCryption.innerHTML = `
            <textarea class="textarea-output" disabled>${textareaValue}</textarea>
            <button class="button-copy-cryption">Copiar</button>
         `;

      }
   }

   function decryptText(){

   }

   function copyText(){
      const textareaOutput = document.querySelector('.textarea-output');
      textareaOutput.select();
      document.execCommand('copy');
   }

   buttonCryptography.addEventListener('click', encryptText);
   buttonDecryption.addEventListener('click', decryptText);

   buttonCopy.addEventListener('click', copyText);
}) */
document.addEventListener("DOMContentLoaded", function() {
   const elementTextarea = document.querySelector("textarea");
   const areaCryption = document.querySelector(".text-cryption");
   const buttonCryptography = document.querySelector(".button-cryptography");
   const buttonDecryption = document.querySelector(".button-decryption");
   const buttonCopy = document.querySelector(".button-copy-cryption");

   function alterTextCryptionArea(){
      const textareaValue = elementTextarea.value;
      
      if ( textareaValue !== '') {
         areaCryption.classList.add("text-cryption-whit-text")
         areaCryption.innerHTML = `
            <textarea class="textarea-output" disabled>${textareaValue}</textarea>
            <button class="button-copy-cryption">Copiar</button>
         `;
      }
   }

   function copyText(){
      /* const text = document.querySelector(".textarea-output").select(); */
      alert("OK")
   }

   buttonCryptography.onclick = alterTextCryptionArea;
   buttonDecryption.onclick = alterTextCryptionArea;
   buttonCopy.addEventListener('click', copyText);
});
