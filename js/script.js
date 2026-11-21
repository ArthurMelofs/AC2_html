
// Adicionar esporte aos favoritos

function adicionarFavorito(esporte) {

    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

    if (favoritos.includes(esporte)) {
        alert("Esse esporte já está nos favoritos!");
        return;
    }

    favoritos.push(esporte);

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    alert(esporte + " adicionado aos favoritos!");
}


// Mostrar os favoritos salvos

function mostrarFavoritos() {

    const lista = document.getElementById("listaFavoritos");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

    if (favoritos.length === 0) {
        lista.innerHTML = "<p>Nenhum esporte favorito ainda.</p>";
        return;
    }

    favoritos.forEach(function(esporte) {

        const card = document.createElement("article");
        card.className = "card";

        const titulo = document.createElement("h3");
        titulo.textContent = esporte;

        const botao = document.createElement("button");
        botao.textContent = "Remover favorito";

        botao.addEventListener("click", function() {
            removerFavorito(esporte);
        });

        card.appendChild(titulo);
        card.appendChild(botao);

        lista.appendChild(card);
    });
}


// Remover esporte dos favoritos

function removerFavorito(esporte) {

    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

    favoritos = favoritos.filter(function(item) {
        return item !== esporte;
    });

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    mostrarFavoritos();
}


// Filtrar notícias por esporte

function filtrarNoticias() {

    const filtro = document.getElementById("filtro").value;
    const noticias = document.querySelectorAll(".noticia");

    noticias.forEach(function(noticia) {

        if (filtro === "todos" ||
            noticia.classList.contains(filtro)) {

            noticia.style.display = "block";

        } else {

            noticia.style.display = "none";

        }
    });
}


// Mostrar detalhes de uma partida

function mostrarDetalhes(esporte, data, horario) {

    alert(
        "Detalhes do evento:\n\n" +
        "Esporte: " + esporte + "\n" +
        "Data: " + data + "\n" +
        "Horário: " + horario
    );
}


// Destacar página atual no menu

function destacarPaginaAtual() {

    const paginaAtual = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {

        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add("ativo");
        }
    });
}


// Executar ao carregar a página

document.addEventListener("DOMContentLoaded", function() {

    mostrarFavoritos();
    destacarPaginaAtual();

});
