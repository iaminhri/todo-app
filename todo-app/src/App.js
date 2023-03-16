import TodoList from './Components/TodoList';
import Sidebar from './Layout/Sidebar';

function App() {
  return (
    <div>
        <div>
          <Sidebar />
        </div>
        
        <main>
          <TodoList />
        </main>
    </div>
  );
}

export default App;
