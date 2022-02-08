import logo from './logo.svg';
import './App.css';
import Task from './Task';
// const greeting = 'HELLO WORLD!'
const tasks = [
  { id: 1, text: 'Lorem Ipsum 1', completed: true },
  { id: 2, text: 'Lorem Ipsum 2', completed: false },
  { id: 3, text: 'Lorem Ipsum 3', completed: true },

]

function App() {
  function onDelete(id) {
    alert("Oops this is an alert sign " + id)
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          tasks.map(task => (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              completed={task.completed}
              onDelete={onDelete} />
          ))
        }
      </header>
    </div>
  );
}

export default App;
