// "use strict";
import Projetos from "./modules/projetos.js";
import MobileButton from "./modules/mobileButton.js";

const projetos = new Projetos(".modal", ".projetos", ".escondido").init();
const mobileButton = new MobileButton(
  ".lista-header",
  ".mobile-button",
  ".lista-header li"
).init();
// console.log("olá");
// const teste = document.querySelector(".centro");
// console.log(teste);
