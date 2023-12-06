import './App.css';
import { useRequestGetTodos } from './hooks'
import ListItem from './components/ListItem';
import SearchForTodos from './components/SearchTodos';
import SortTasksAlphabetically from './components/SortingTasks';
import AddingTask from './components/AddTodo';
import { AppContext } from './contextApp';

function App() {

  const { todos, fetchBySearchQery, fetchBySort, fetchTodos, isLoading } = useRequestGetTodos();

  return (
    <AppContext.Provider value={{ todos, fetchBySearchQery, fetchBySort, fetchTodos, isLoading }}>
      <div className='boardWrapper'>
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          <div className='board'>
            <h1> Список дел</h1>
            <AddingTask />
            <div className='SortAndSearch'>
              <SearchForTodos />
              <SortTasksAlphabetically />
            </div>
            {todos.length === 0 ? 'Дела не запланированы' :
              (<ul className='todos'>
                {todos.map(({ id, title }) =>
                  <ListItem key={id} id={id} title={title} />
                )}
              </ul>)
            }
          </div>
        )}
      </div>
    </AppContext.Provider>


  );
}


export default App
