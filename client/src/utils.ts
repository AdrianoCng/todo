export const logout = async () => {
    return new Promise<void>((res) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        res();
    });
};
