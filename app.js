function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campoPesquisa")

    // Se campoPesquisa for uma string sem nada
    if(campoPesquisa = "") {
        section.innerHTML = "Nada foi encontrado"
        return
    }
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
       
        // se titulo icludes campoPesquisa
        if(dado.titulo.includes(campoPesquisa)){
          
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        }
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}