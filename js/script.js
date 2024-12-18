//menu header para ativar o after do a ao ser clicado
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

//ativar itens do orçamento
// location acompanhado com .serach pega os parametros que estão no link da url, a classe URLSearchParams pega esses parametros sem precisar manipular a String, mas a classe precisa acompanhar o new antes e dentro do parametro a string no caso o location.search
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  // elemento pega o id que o parametro esta atribuido
  const elemento = document.getElementById(parametro);
  // if verifica se o parametro existe, se existir mais de um ou algo rolar ele não da erro e retorna null
  if (elemento) {
    // elemento.cheked faz o html checar a propiedade
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function EventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(EventosPergunta);

//galeria de imagens bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens Img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const Img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    // metodo prepend faz com que o elemento em si mude a sequencia para primeiro, ent pela logica caso o usuario click no evento de click na imagem o prepend vai agir colocando a imagem clicada em primeiro
    galeriaContainer.prepend(Img);
  }
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
