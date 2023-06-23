const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-tasks')

let minhaListDeItens = [];
    
    document.addEventListener("keypress", function(e) {
        var button = document.getElementById("button-task");

            if (e.key === 'ENTER') {
        
                button.click();
      }
    });
  

function adicionarNovaTarefa() {
  minhaListDeItens.push({
    tarefa: input.value,
    concluida: false

  })

  input.value = ''

  mostrarTarefas();
}

function mostrarTarefas() {

    let novaList = ''

    minhaListDeItens.forEach( (item, index) => {

        novaList = novaList + `

        <li class="task ${item.concluida && "done"}">
            <img src="img/checked (1).png" alt="check-na-tarefa" onclick="concluirTask(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deleteItem(${index})">
        </li>

      `
    })

    listaCompleta.innerHTML = novaList

    localStorage.setItem('list', JSON.stringify(minhaListDeItens))
}

function concluirTask(index){
    minhaListDeItens[index].concluida = !minhaListDeItens[index].concluida

    mostrarTarefas()
}

function deleteItem(index){
    minhaListDeItens.splice(index, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('list')

    if(tarefasDoLocalStorage){
    minhaListDeItens = JSON.parse(tarefasDoLocalStorage)
 }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener("click", adicionarNovaTarefa);
