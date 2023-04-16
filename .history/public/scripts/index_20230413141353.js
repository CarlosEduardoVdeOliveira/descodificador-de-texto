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
      `;
      buttonCopy.classList.remove('btn-display-none')
      buttonCopy.classList.add('btn-display-block')

   }
}


function copyText(){
   /* const text = document.querySelector(".textarea-output").select(); */
   alert("OK")
}
buttonCryptography.onclick = alterTextCryptionArea;
buttonDecryption.onclick = alterTextCryptionArea;
buttonCopy.onclick = copyText;
