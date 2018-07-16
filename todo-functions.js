// get stored todos from local storage

const savedTodos = function() {
	if (localStorage.getItem('todos') != null) {
		let storageTodos = JSON.parse(localStorage.getItem('todos'));
		return storageTodos;
	} else {
		return [];
	}
}