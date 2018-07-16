// get stored todos from local storage

const savedTodos = function() {
	if (localStorage.getItem('todos') != null) {
		let storageTodos = JSON.parse(localStorage.getItem('todos'));
		return storageTodos;
	} else {
		return [];
	}
}


// get filtered todos


const saveToLocalStorage = function(storageTodos) {
	localStorage.setItem('todos', JSON.stringify(storageTodos));
}


const removeTodos = function(todoId) {
	let index = todos.findIndex(function(todo) {
		return todo.id === todoId;
	});

	if (index != -1) {
		todos.splice(index, 1);
		saveToLocalStorage(todos);
	}
}


const liveFilteredTodos = function(todos, filters) {
	let filteredTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
	})

	filteredTodos = filteredTodos.filter((todo) => {
		if (filters.hideCompleted) {
			return !todo.completed;
		} else {
			return true;
		}
	})

	// adding delete button to all the todos
	document.querySelector('#all-todos').innerHTML = '';
	const container = document.createElement('div');
	document.querySelector('#all-todos').appendChild(container);
	const deleteButton = document.createElement('button');
	filteredTodos.forEach((todo) => {
		const deleteButton = document.createElement('button');
		deleteButton.addEventListener('click', function() {
			removeTodos(todo.id);
			liveFilteredTodos(todos, filters);
		});
		const check = document.createElement('input');
		check.setAttribute('type', 'checkbox');
		if (todo.completed) {
			check.checked = true;
		}
		check.addEventListener('change', function() {
			todo.completed = !todo.completed;
			saveToLocalStorage(todos)
			liveFilteredTodos(todos, filters);
		})
		deleteButton.textContent = 'delete'
		const ele = document.createElement('a');
		ele.setAttribute('href', `edit.html#${todo.id}`)
		ele.textContent = todo.text;
		container.appendChild(check);
		container.appendChild(ele);
		container.appendChild(deleteButton)
		const br = document.createElement('br');
		container.appendChild(br);
		return filteredTodos;
	});
};