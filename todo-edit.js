const todoId = location.hash.substring(1);
const allTodos = savedTodos();

const currentTodo = allTodos.find((todo) => {
	return todo.id == todoId;
});

if (currentTodo == undefined) {
	location.assign('/index.html');
}
document.querySelector('#edit-todo').value = currentTodo.text;

document.querySelector('#submit').addEventListener('click', function(e) {
	currentTodo.text = document.querySelector('#edit-todo').value;
	saveToLocalStorage(allTodos);
	location.assign('/index.html');

})