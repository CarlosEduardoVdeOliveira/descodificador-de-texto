const elementTextarea = document.querySelector("textarea.textarea-input");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


function alterTextCryptionArea(){
   areaCryption.innerHTML = `
      <textarea class="textarea-output" disabled>${elementTextarea.value}</textarea>
      <button class="button-copy-cryption">Copiar</button>
   `;
}
/* 
function copyText(){
   const text = document.querySelector("format-text-cryption")
   text.select();
   document.execCommand('copy');
} */
/* document.querySelector("button-copy-cryption").onclick = copyText */
buttonCryptography.onclick = alterTextCryptionArea
buttonDecryption.onclick = alterTextCryptionArea
