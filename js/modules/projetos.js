import projetosApi from "../utils/projetosApi.js";

export default class Projetos {
  constructor(projetos, backgroundModal, foto, modal, botao, fotosTecnologias) {
    this.projetos = Array.from(document.querySelectorAll(projetos));
    this.backgroundModal = document.querySelector(backgroundModal)
    this.foto = document.querySelector(foto);
    this.modal = document.querySelector(modal);
    this.botao = document.querySelector(botao);
    this.fotosTecnologias = document.querySelector(fotosTecnologias);
  }

  addEventos(){
    ['touch', 'click'].forEach(item => {
      this.projetos.forEach((projeto) => {
        projeto.addEventListener(item, (event) => {
          this.openModal(event)
        })
      })
    })
  } 

  openModal(event){
    this.backgroundModal.style.display = 'flex'
    this.backgroundModal.children[0].children[2].children[1].innerText = projetosApi[event.srcElement.classList[0]].descricao;
    this.foto.style.backgroundImage = `url(${projetosApi[event.srcElement.classList[0]].foto})`
    this.backgroundModal.children[0].children[2].children[2].children[0].innerText = projetosApi[event.srcElement.classList[0]].link
    this.backgroundModal.children[0].children[2].children[2].children[0].href = projetosApi[event.srcElement.classList[0]].link
    document.addEventListener('click', this.clickOutSide);
    this.adicionaFotos(event);
  }

  adicionaFotos(event){
    projetosApi[event.srcElement.classList[0]].tecnologias.forEach(tecnologia => {
      if (tecnologia === 'css'){
        this.fotosTecnologias.innerHTML += `<li style="background-size: 70%; background-image: url('../../images/icones-tecnologias/${tecnologia}.png');"></li>`
      }else {
        this.fotosTecnologias.innerHTML += `<li style="background-image: url('../../images/icones-tecnologias/${tecnologia}.png');"></li>`
      }
    });
  }

  clickOutSide(event){
    if (event.srcElement == this.backgroundModal || event.srcElement == this.botao){
      this.backgroundModal.style.display = 'none'
      this.fotosTecnologias.innerHTML = '';
      document.removeEventListener('click', this.clickOutSide);
    }
  }

  bindCallBack(){
    this.openModal = this.openModal.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
    this.adicionaFotos = this.adicionaFotos.bind(this);
  }
  
  init() {
    this.addEventos();
    this.bindCallBack();
    return this;
  }
}