// TEST EXO TODO 

const form = document.querySelector('form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', e => {
    e.preventDefault();                 // // empeche le formulaire de recharger la page (comportement normal d'un <form>)
    const text = input.value.trim();    // trim = enleve les espaces en trop (ex : l'user en a mit au début de l'input)
    if (text) {
        todos.push(text);
        input.value = "";
        renderList();
    } else {
        alert("Error input.value.trim bug")
    }
});

function renderList() {
    list.innerHTML = "";
    todos.forEach((text, index) => {
        const li = document.createElement("li");
        li.className = "todo";
        li.innerHTML = `
            <input type="checkbox" id="todo-${index}">
            <label for="todo-${index}" class="custom-checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>
            <label for="todo-${index}" class="todo-text">${text}</label>
            <button class="delete-button">
                <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>
            </button>`;

        li.querySelector(".delete-button").addEventListener("click", () => {
            todos.splice(index, 1); // TODO INDEX = PLACEMENT DANS LE TABLEAU ; 1 = NOMBRE DELEMENT A SUPPRIMER(= 1) EN COMMENCANT A LA CASE "INDEX"
            renderList();
        });

        list.appendChild(li);
    });
}
