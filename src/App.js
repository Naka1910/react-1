// import logo from './logo.svg';
import './App.css';
// import Task from './Task';
import Counter from './Counter';
import { useState } from 'react';
import Products from './Products'
// const greeting = 'HELLO WORLD!'
// const tasks = [
//   { id: 1, text: 'Lorem Ipsum 1', completed: true },
//   { id: 2, text: 'Lorem Ipsum 2', completed: false },
//   { id: 3, text: 'Lorem Ipsum 3', completed: true },

// ]

function App() {
  const [showCounter, setShowCounter] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {
          showCounter && <Counter />
        }
        <Products />
        <button className='button' onClick={() => { setShowCounter(false) }}>Hide counter</button>
        {/* {
          tasks.map(task => (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              completed={task.completed}
              onDelete={onDelete} />
          ))
        } */}
      </header>
      {
        // showFooter ? <footer> Footer Text </footer> : <footer> Footer Text 11</footer>
      }
    </div>
  );
}

export default App;
