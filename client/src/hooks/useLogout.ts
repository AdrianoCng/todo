import { useMutation } from "react-query";

import { endpoints } from "./../constants";
import { api } from "../api";
import { useAuthContext } from "../contexts/AuthContext";
import { logout } from "../utils";

export default function useLogout() {
    const { setIsAuthenticated } = useAuthContext();

    const { mutate, ...mutation } = useMutation(
        async () => {
            const { data } = await api.post(endpoints.logout);

            return data;
        },
        {
            onSettled() {
                logout();

                setIsAuthenticated(false);
            },
        }
    );

    return [mutate, mutation] as const;
}
