const bbotoes = document.querySelectorAll(".botao");

for (let i=0; i<botoes.lenght; i++) {
    botoes[i].onclick = function() {
        botoes(i).classlit.add("ativo");
    };
}