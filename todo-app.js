
const todos = [];

// let p = document.querySelectorAll('p')

// p.forEach((ele) => {
// 	if(ele.textContent.includes('the')){
// 		ele.remove();
// 	}
// })


const filters = {
	searchText: '',
    hideCompleted: false
};

const para = document.createElement('h2');

    function FilteredTodos(){
	let filtodos = todos.filter((todo) => {
		return todo.completed == false
	});
   return filtodos;
}

     function liveFilteredTodos(todos, filters) {
	let filteredTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
	}) 

	filteredTodos = filteredTodos.filter((todo) => {
		if(filters.hideCompleted){
			return !todo.completed;
		}else{
			return true;
		}
	})

    document.querySelector('#all-todos').innerHTML = '';

	filteredTodos.forEach((todo) => {
	const  ele = document.createElement('p');
	ele.textContent = todo.text;
	document.querySelector('#all-todos').appendChild(ele);
	return filteredTodos
});
};



para.textContent = `You have ${FilteredTodos().length} todos left!!`;
document.querySelector('#summary').appendChild(para);
liveFilteredTodos(todos , filters);


// todos.forEach((todo) => {
// 	const  ele = document.createElement('p');
// 	ele.textContent = todo.text;
// 	document.querySelector('#all-todos').appendChild(ele);
// })

// document.querySelector('#but').addEventListener('click', function(e){
//      console.log('clicked the button!!!');
// });


document.querySelector('#filter-todos').addEventListener('input', function(e){
	// console.log(e.target.value);
	filters.searchText = e.target.value
    liveFilteredTodos(todos , filters);
});

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({text: e.target.elements.todoValue.value , completed: false});
    liveFilteredTodos(todos, filters);
    e.target.elements.todoValue.value = '';
});

document.querySelector('#for-check').addEventListener('change', function(e) {
   filters.hideCompleted = e.target.checked;
   liveFilteredTodos(todos, filters);
  
});




