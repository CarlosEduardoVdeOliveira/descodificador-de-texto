const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

function alterTextCryptionArea(){
   const textareaValue = elementTextarea.value;
   
   if ( textareaValue !== '') {
      areaCryption.classList.add("text-cryption-whit-text")
      areaCryption.innerHTML = `
      <textarea class="textarea-output" /* disabled */>${textareaValue}</textarea>
      <button class="button-copy-cryption">Copiar</button>
      `;
   }
}
const buttonCopy = document.querySelector(".button-copy-cryption");

function copyText(){
   const text = document.querySelector(".textarea-output").select();
   console.log(text);
}
buttonCryptography.onclick = alterTextCryptionArea;
buttonDecryption.onclick = alterTextCryptionArea;
buttonCopy.onclick = alterTextCryptionArea;
