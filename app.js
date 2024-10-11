function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campoPesquisa").value;

  // Se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado.</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let link = "";
  let tags = "";
  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo icludes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
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
  if (!resultados) {
    resultados = "<p>Não encontrado</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}

function limpar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campoPesquisa");


  campoPesquisa.value = ""
  section.innerHTML = ""
}