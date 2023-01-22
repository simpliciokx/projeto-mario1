 /**
  * objetivo 1 quando o úsuario clicar no botão veja o trailer,devemos abrir a modal com o video do trailer
  * objetivo 2 quando o úsuario clicar no x devemos fechar a modal
  * 
 */

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternaModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", "");
});







