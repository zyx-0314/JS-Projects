const add = document.getElementById("_addBtn");
const input = document.getElementById("_input");
const list = document.getElementById("_notDoneList");
const done = document.getElementById("_doneList");
const doneHeader = document.getElementById("_doneHeader");

let toDoList = [];
let toDoListDone = [];

input.addEventListener("input", function () {
    add.disabled = input.value.length === 0;
});

add.addEventListener("click", function (event) {
    event.preventDefault();
    toDoList.push(input.value);
    input.value = "";
    add.disabled = true;
    renderTodo();
});

list.addEventListener("click", handleListClick);
done.addEventListener("click", handleDoneClick);

function handleListClick(event) {
    const target = event.target;
    console.log(target);

    if (target.matches("#_delete")) {
        console.log("delete");
        handleDelete(target, toDoList, renderTodo);
    } else if (target.matches("#_checkbox")) {
        handleCheckbox(target, toDoList, toDoListDone, renderTodo, renderTodoDone);
    }
}

function handleDoneClick(event) {
    const target = event.target;

    if (target.matches("#_delete")) {
        handleDelete(target, toDoListDone, renderTodoDone);
    } else if (target.matches("#_checkbox")) {
        handleCheckbox(target, toDoListDone, toDoList, renderTodoDone, renderTodo);
    }
}

function handleDelete(target, listArray, renderFunction) {
    const index = Array.from(target.parentNode.children).indexOf(target.parentNode);
    listArray.splice(index, 1);
    renderFunction();
}

function handleCheckbox(target, sourceList, destinationList, renderSource, renderDestination) {
    const index = sourceList.indexOf(target.parentNode.children[1].innerHTML);
    destinationList.push(sourceList[index]);
    sourceList.splice(index, 1);
    renderSource();
    renderDestination();
}

function renderTodo() {
    list.innerHTML = "";
    toDoList.forEach((item) => {
        const li = createListItem(item, "_item-text");
        list.appendChild(li);
    });
}

function renderTodoDone() {
    done.innerHTML = "";

    toDoListDone.length !== 0 ? doneHeader.classList.add("active") : doneHeader.classList.remove("active");

    toDoListDone.forEach((item) => {
        const li = createListItem(item, "_item-text", "done");
        li.querySelector("input").checked = true;
        done.appendChild(li);
    });
}

function createListItem(item, spanId, doneClass = "") {
    const li = document.createElement("li");
    li.classList.add("item");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("id", "_delete");
    deleteBtn.innerHTML = '<i class="fas fa-trash" id="_delete"></i>';

    const checkbox = document.createElement("input");
    checkbox.setAttribute("aria-label", "checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("id", "_checkbox");

    const span = document.createElement("span");
    span.innerText = item;
    span.classList.add("item-text");
    span.classList.add(spanId);
    if (doneClass !== "") {
        span.classList.add(doneClass);
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}
