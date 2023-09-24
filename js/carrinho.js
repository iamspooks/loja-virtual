const produtos = [
  { nome: "Produto 1", preco: 10 },
  { nome: "Produto 2", preco: 20 },
  { nome: "Produto 3", preco: 30 },
];

const carrinho = [];

const produtosLista = document.querySelector(".produtos-lista");
const carrinhoLista = document.querySelector(".carrinho-lista");

produtos.forEach((produto) => {
  const produtoElemento = document.createElement("div");
  produtoElemento.classList.add("produto");

  const imagemElemento = document.createElement("img");
  imagemElemento.src = "produto.jpg";
  imagemElemento.alt = produto.nome;
  produtoElemento.appendChild(imagemElemento);

  const nomeElemento = document.createElement("h3");
  nomeElemento.textContent = produto.nome;
  produtoElemento.appendChild(nomeElemento);

  const precoElemento = document.createElement("p");
  precoElemento.textContent = `R$ ${produto.preco.toFixed(2)}`;
  produtoElemento.appendChild(precoElemento);

  const botaoElemento = document.createElement("button");
  botaoElemento.textContent = "Adicionar ao carrinho";
  botaoElemento.addEventListener("click", () => {
    carrinho.push(produto);
    atualizarCarrinho();
  });
  produtoElemento.appendChild(botaoElemento);

  produtosLista.appendChild(produtoElemento);
});

function atualizarCarrinho() {
  carrinhoLista.innerHTML =
  carrinhoLista.innerHTML = "";

  carrinho.forEach((produto) => {
    const produtoElemento = document.createElement("p");
    produtoElemento.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    carrinhoLista.appendChild(produtoElemento);
  });
}