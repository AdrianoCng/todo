export const endpoints = {
    todos: "/todos",
    login: "/login",
};

export const routes = {
    home: "/projects/todo-app-express",
    login() {
        return `${this.home}/login`;
    },
};
