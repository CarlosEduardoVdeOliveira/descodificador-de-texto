const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


function alterTextCryptionArea(){
   areaCryption.innerHTML = `
      <p class="format-text-cryption">${elementTextarea.value}</p>
      <button class="button-copy-cryption">Copiar</button>
   `;
}
buttonCryptography.onclick = alterTextCryptionArea
buttonDecryption.onclick = alterTextCryptionArea