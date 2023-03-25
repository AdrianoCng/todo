export const endpoints = {
    todos: "/todos",
    login: "/login",
    logout: "/logout",
    refreshToken: "/token",
};

export const routes = {
    home: "/projects/todo-app-express",
    login() {
        return `${this.home}/login`;
    },
    signup() {
        return `${this.home}/signup`;
    },
};
