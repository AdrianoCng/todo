import "./App.css";
import Form from "./containers/form/Form";
import TodoList from "./containers/TodoList/TodoList";

function App() {
    return (
        <div className="App">
            <h1>To-Do List</h1>

            <Form />
            <TodoList />
        </div>
    );
}

export default App;
