import projetosApi from "../utils/projetosApi.js";

export default class Projetos {
  constructor(modal, projetos, escondidos) {
    this.projetos = Array.from(document.querySelectorAll(projetos));
    this.teste = document.querySelector(modal);
    this.escondidos = Array.from(document.querySelectorAll(escondidos));
  }

  addEventos() {
    ["touch", "click"].forEach((evento) => {
      this.projetos.forEach((item) => {
        item.addEventListener(evento, this.openModal);
      });
    });
    this.projetos.forEach((item) => {
      item.addEventListener("mouseover", this.ativaInfo);
    });
    this.projetos.forEach((item) => {
      item.addEventListener("mouseout", this.desativaInfo);
    });
  }

  ativaInfo(event) {
    console.log(this.escondidos);
    // console.log(event.path[0].classList[0]);
  }

  desativaInfo() {
    console.log("desativou");
  }

  openModal(event) {
    event.preventDefault();
    // console.log(projetosApi[event.path[0].classList[0]]);
    // console.log(event.path[0].classList[0]);
    // document.querySelector;
    console.log(this.projetos);
  }

  bindCallBacks() {
    this.openModal = this.openModal.bind(this);
    this.ativaInfo = this.ativaInfo.bind(this);
    this.desativaInfo = this.desativaInfo.bind(this);
  }

  init() {
    this.addEventos();
    this.bindCallBacks();
    return this;
  }
}
