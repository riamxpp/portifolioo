export default class MobileButton {
  constructor(lista, mobileButton, itensLista) {
    this.lista = document.querySelector(lista);
    this.mobileButton = document.querySelector(mobileButton);
    this.itensLista = document.querySelectorAll(itensLista);
    //bind
    this.ativaMobileButton = this.ativaMobileButton.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  ativaMobileButton() {
    document.removeEventListener("click", this.clickOut);

    this.lista.classList.toggle("ativo");

    document.addEventListener("click", this.clickOut);
  }

  clickOut(event) {
    if (
      event.srcElement === this.itensLista[0] ||
      event.srcElement === this.itensLista[1] ||
      event.srcElement === this.itensLista[2]
    ) {
      return;
    } else if (event.srcElement !== this.mobileButton) {
      this.lista.classList.remove("ativo");
    }
  }

  bindEvents() {
    this.mobileButton.addEventListener("click", this.ativaMobileButton);
  }

  init() {
    this.bindEvents();
    return this;
  }
}
