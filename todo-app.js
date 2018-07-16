let todos = savedTodos();

const filters = {
	searchText: '',
	hideCompleted: false
};


liveFilteredTodos(todos, filters);



document.querySelector('#filter-todos').addEventListener('input', function(e) {
	filters.searchText = e.target.value
	liveFilteredTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', function(e) {
	e.preventDefault();
	todos.push({
		id: uuidv4(),
		text: e.target.elements.todoValue.value,
		completed: false
	});
	localStorage.setItem('todos', JSON.stringify(todos));
	liveFilteredTodos(todos, filters);
	e.target.elements.todoValue.value = '';
});

document.querySelector('#for-check').addEventListener('change', function(e) {
	filters.hideCompleted = e.target.checked;
	liveFilteredTodos(todos, filters);

});