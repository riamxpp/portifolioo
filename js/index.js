// "use strict";
import Projetos from "./modules/projetos.js";
import MobileButton from "./modules/mobileButton.js";

const projetos = new Projetos( ".projetos",".background-modal", '.container-foto-modal', '.conteudo-modal', '.fecha-modal', '.fotos_tencologias').init();
const mobileButton = new MobileButton(
  ".lista-header",
  ".mobile-button",
  ".lista-header li",
).init();