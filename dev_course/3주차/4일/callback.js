// sync

const API_ENDPOINT = "https://kdt.bangg.codes";

const todos = syncRequest(`${API_ENDPOINT}/todos`);
const completedTodo = todos.find(todo => todo.isCompleted);

if ( completedTodo ) { 
  const comments = syncRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
  comments.forEach(comment => console.log(comment.content))
}


// async
const API_ENDPOINT = "https://kdt.bangg.codes";

request(`${API_ENDPOINT}/todos`, (todos) => {
  const completedTodo = todos.find((todo) => todo.isCompleted);

  if ( completedTodo ) {
    request(`${API_ENDPOINT}/comments?todo.id=${completedTodo/id}`, (comments) => {
      comments.forEach(comment => console.log((comment.contnent));)
    }
});


// async await

const API_ENDPOINT = "https://kdt.bangg.codes";

const todos = await asyncRequest(`${API_ENDPOINT}/todos`)
const completedTodo =todos.find(todo => todo.isCompleted);

if ( completedTodo ) {
  const comments = await asyncRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
  comments.forEach(comment => console.log(comment.contnent);)
}