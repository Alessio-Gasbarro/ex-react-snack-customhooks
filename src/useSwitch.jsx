import { useState, useCallback } from "react";

export default function useSwitch(initialValue = false) {
    const [state, setState] = useState(initialValue);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle];
}