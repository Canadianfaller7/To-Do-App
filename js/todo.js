// this function gets the task from input
function getTodos() {
    // this creates an array of tasks that are inputed
    let todos = new Array;
    // this pulls the task that was saved in the web browser memory
    let todosStr = localStorage.getItem('todo');
    /* If the input is not nul;l then JSON.parse will communicate
    with the web browser to make the task a JS object. */
    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

// this function adds the inputed task to the getTodos function array
function add() {
    // this takes the inputed task and creates a variable of it
    let task = document.getElementById('task').value;
    let todos = getTodos();
    // this adds a new task to the end of the array
    todos.push(task);
    // this converts the task input to a JSON String
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}
// this creates the functionality of removing a todo item from the array
function remove() {
    let id = this.getAttribute('id');
    let todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // this looks in the show() how to display a removed item on the screen
    show();

    return false;
}
// this function keeps the tasks permanetly displayed on the screen
function show() {
    // this sets the task that was retrieved as a var
    let todos = getTodos();
    // this sets up each task as an unordered list
    let html = '<ul>';
    // this displays a task to the list in the order that it is inputed
    for (let i = 0; i < todos.length; i++) {
        /* this also displays the task as a 
        list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // this displays the task as a list
    document.getElementById('todos').innerHTML = html;

    /* this tells the broswer how to display the todo array after
    an item has been removed */
    let buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
};

// this displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// this will keep the inputs displayed permantely on the screen
show();