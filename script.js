const button = document.querySelector(".button-add-task")
const buttonMobile = document.querySelector(".button-mobile")
const input = document.querySelector(".input-task")
const listCompleted = document.querySelector(".list-task")

let listItens = []

function addTask() {
    listItens.push({
        task: input.value,
        checked: false
    })

    input.value = ''

    showTask()
}

function showTask() {
    let newTask = ''

    listItens.forEach((item, index) => {
        newTask = newTask + `
        <li class="task ${item.checked && "done"}">  
            <img src="img/checked.svg" alt="check na tarefa" class="icones" onclick="checkTask(${index})">
            <p>${item.task}</p>
            <img src="img/trash.svg" alt="tarefa para o lixo" class="icones" onclick="delTask(${index})">
        </li>
        `
    })

    listCompleted.innerHTML = newTask


    localStorage.setItem('list', JSON.stringify(listItens))

}

function checkTask(index) {
    listItens[index].checked = !listItens[index].checked

    showTask()
}

function delTask(index) {
    listItens.splice(index, 1)

    showTask()
}

function reloadTasks() {
    const localTask = localStorage.getItem('list')

    if(localTask) {
        listItens = JSON.parse(localTask)
    }

    showTask()
}

reloadTasks()
button.addEventListener('click', addTask)
buttonMobile.addEventListener('click', addTask)