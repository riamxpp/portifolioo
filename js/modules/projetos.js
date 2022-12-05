export default class Projetos {
  constructor(projetos, infoProjetos) {
    this.projetos = Array.from(document.querySelectorAll(projetos));
    this.infoProjetos = infoProjetos;
  }

  showInfos(event) {
    event.srcElement.children[0].style.display = "flex";
    console.log(this.infoProjetos);
  }

  hiddenInfos(event) {
    event.srcElement.children[0].style.display = "none";
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

    console.log(this.projetos);
    return this;
  }
}
