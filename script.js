// Interações simples do CineTec
// A busca filtra os trailers visíveis na página atual.
document.addEventListener("DOMContentLoaded", function () {
    const campoBusca = document.querySelector("#pesquisaTrailer");
    const cards = Array.from(document.querySelectorAll(".trailer-card"));
    const mensagem = document.querySelector(".resultado-busca");

    if (!campoBusca || cards.length === 0) return;

    function filtrarTrailers() {
        const termo = campoBusca.value.trim().toLocaleLowerCase("pt-BR");
        let encontrados = 0;

        cards.forEach(function (card) {
            const texto = card.innerText.toLocaleLowerCase("pt-BR");
            const combina = texto.includes(termo);
            card.hidden = !combina;
            if (combina) encontrados++;
        });

        if (termo === "") {
            mensagem.textContent = "Pesquise entre os trailers exibidos nesta página.";
        } else if (encontrados === 1) {
            mensagem.textContent = "1 trailer encontrado nesta página.";
        } else {
            mensagem.textContent = encontrados + " trailers encontrados nesta página.";
        }
    }

    campoBusca.addEventListener("input", filtrarTrailers);
});
