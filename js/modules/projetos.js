export default class Projetos {
  constructor(projetos) {
    this.projetos = document.querySelectorAll(projetos);
  }

  scaleProjeto() {
    this.projetos.forEach((item) => {
      item.addEventListiner("click", console.log("olá"));
    });
  }

  init() {
    this.scaleProjeto();
    return this;
  }
}
