let totalGeral = 0;
limpar();

function adicionar(){
//recuperar valores (nome do produto e a quantidade)
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; 
let valorUnitario = produto.split('R$')[1];

let quantidade = document.getElementById('quantidade').value;
/*alert(nomeProduto);
alert(valorUnitario);
alert(quantidade.value);
alert(preco);*/

//Calcular o preço, o subtotal
let preco = quantidade*valorUnitario;
let carrinho = document.getElementById('lista-produtos');
//adicionar carrinho
carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;


//atualizar o valor total
totalGeral = totalGeral+preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;

}


function limpar (){
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

}