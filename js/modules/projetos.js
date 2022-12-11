import projetosApi from "../utils/projetosApi.js";

export default class Projetos {
  constructor(projetos) {
    this.projetos = Array.from(document.querySelectorAll(projetos));
  }

  showInfos(event) {
    event.target.children[0].classList.remove("desativa-animacao");
    event.target.children[0].classList.add("ativa-animacao");
    // event.srcElement.children[0].style.display = "flex";
    // console.log(projetosApi[event.srcElement.classList[0]]);
  }

  hiddenInfos(event) {
    // event.srcElement.children[0].style.display = "none";
    event.target.children[0].classList.remove("ativa-animacao");
    event.target.children[0].classList.add("desativa-animacao");
  }

  scaleProjeto() {
    this.projetos.forEach((item) => {
      item.addEventListener("mouseenter", this.showInfos);
    });

    this.projetos.forEach((item) => {
      item.addEventListener("mouseleave", this.hiddenInfos);
    });
  }
  init() {
    this.scaleProjeto();
    return this;
  }
}
