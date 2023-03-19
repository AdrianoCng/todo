import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import TodoList from "../containers/TodoList/TodoList";

export default function Homepage() {
    return (
        <div className="App">
            <h1>To-Do List</h1>

            <Form>
                <Input />
                <Button>Add</Button>
            </Form>
            <TodoList />
        </div>
    );
}
