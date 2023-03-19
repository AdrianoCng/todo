import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initialValue?: T) {
    const [state, setState] = useState<T | undefined>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error retrieving ${key} from localStorage`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (state === undefined) {
                window.localStorage.removeItem(key);
            } else {
                window.localStorage.setItem(key, JSON.stringify(state));
            }
        } catch (error) {
            console.warn(`Error saving ${key} to localStorage`, error);
        }
    }, [key, state]);

    return [state, setState] as const;
}
