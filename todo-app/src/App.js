import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
import Sidebar from './Layout/Sidebar';
import {useState} from 'react';

const todos = [
  {
    id: 'id1',
    title: 'Dummy Task 1', 
    desc: 'Dummy Task Description 1', 
    date: new Date(2021, 2, 28)
  },
  {
    id: 'id2',
    title: 'Dummy Task 2', 
    desc: 'Dummy Task Description 2', 
    date: new Date(2022, 4, 15)
  },
  {
    id: 'id3',
    title: 'Dummy Task 3', 
    desc: 'Dummy Task Description 3', 
    date: new Date(2022, 8, 28)
  },
  {
    id: 'id4',
    title: 'Dummy Task 4', 
    desc: 'Dummy Task Description 4', 
    date: new Date(2022, 12, 24)
  }
];

function App() {

  const [tasks, setTasks] = useState(todos); 

  const addTodoHandler = (todos) => {
    setTasks(previousTasks => {
      return [tasks, ...previousTasks];
    });
  };

  return (
    <div>
        <div>
          <Sidebar />
        </div>
        
        <main>
          <TodoList />
        </main>

        <Todo items={todos}></Todo>
    </div>
  );
}

export default App;
