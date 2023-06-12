export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind de this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o envento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar ao lado de fora
  cliqueForaModal(event) {
    console.log(event.target);
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona eventos aos elementos do modal.
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
