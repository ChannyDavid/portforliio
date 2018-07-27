let addTodo = function(txt) {
    let btn = document. createElement("button");
    btn.classList.add("todo-button")
    btn.innerText= txt;
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
        document.body.removeChild(btn);
    });
}



let addBtn = document.querySelector(".add-button");
addBtn.addEventListener('click', function() {
    let input = document.querySelector("input");
    addTodo(input.value);
});


