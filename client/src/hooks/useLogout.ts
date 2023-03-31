import { useMutation, useQueryClient } from "react-query";

import { endpoints } from "./../constants";
import { api, todosKeys } from "../api";
import { useAuthContext } from "../contexts/AuthContext";
import { logout } from "../utils";

export default function useLogout() {
    const { setIsAuthenticated } = useAuthContext();
    const queryClient = useQueryClient();

    const { mutate, ...mutation } = useMutation(
        async () => {
            const { data } = await api.post(endpoints.logout);

            return data;
        },
        {
            onSettled() {
                logout();

                setIsAuthenticated(false);
                queryClient.invalidateQueries(todosKeys.all());
            },
        }
    );

    return [mutate, mutation] as const;
}
