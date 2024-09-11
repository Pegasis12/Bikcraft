// ativar o after do a ao ser clicado
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  // metodo includes verifica se tem uma parte doq esta escrito no texto dentro de outro texto
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
