import { useEffect, useState } from "react";

export default function useCustomPointer(content) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.body.style.cursor = "none";
        window.addEventListener("mousemove", updateMouse);

        return () => {
            document.body.style.cursor = "default";
            window.removeEventListener("mousemove", updateMouse);
        };
    }, []);

    const style = {
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvent: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        fontSize: "24px",
    };

    return <div style={style}>{content}</div>;
}