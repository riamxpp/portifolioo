import projetosApi from "../utils/projetosApi.js";

export default class Projetos {
  constructor(projetos, backgruondModal, fechaModalBotao) {
    this.projetos = Array.from(document.querySelectorAll(projetos));
    this.backgroundModal = document.querySelector(backgruondModal);
    this.botaoModal = document.querySelector(fechaModalBotao);
  }

  openModal() {
    console.log(this.backgruondModal);
    this.backgroundModal.classList.add("ativo");
    // this.modal.addEventListener("click", () => {
    //   this.fechaModal(this.modal);
    // });
  }

  fechaModalBotao() {
    this.botaoModal.classList.remove("ativo");
  }

  fechaModalFora() {
    this.backgroundModal.classList.remove("ativo");
  }

  scaleProjeto() {
    this.projetos.forEach((item) => {
      item.addEventListener("click", this.openModal);
      // this.openModal(event, item);
    });
    this.backgroundModal.addEventListener("click", this.fechaModalFora);
    this.botaoModal.addEventListener("click", this.fechaModalBotao);
  }

  init() {
    this.scaleProjeto();
    return this;
  }
}
