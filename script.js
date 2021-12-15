const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById('nav');
  nav.classList.toggle('ativo');
  // ! ACESSIBILIDADE: serve para o leitor de HTML da página identificar quando o elemento pode ser expandido (se a classe ativo existir, significa que sim e está expadido, se não, permanece como "false")
  const ativado = nav.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativado);
  //  ! ACESSIBILIDADE: serve para alterar o texto do leitor para o botão. Se está aberto o botão terá o label de fechar, se está fechado o terá o valor de abrir.
  if(ativado) {
    event.currentTarget.setAttribute('aria-label', "Fechar menu")
  } else {
    event.currentTarget.setAttribute('aria-label', "Abrir menu")
  }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);