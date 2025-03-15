import { useState, useEffect } from "react";

export function useDeveloperText(textArray, typingSpeed = 100, delay = 2000) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true); // Controla el parpadeo del cursor

    useEffect(() => {
        if (subIndex === textArray[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), delay); // Pausa antes de borrar
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % textArray.length); // Avanza al siguiente texto
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, textArray, typingSpeed, delay, index]);

    useEffect(() => {
        setText(textArray[index].substring(0, subIndex));
    }, [subIndex, index, textArray]);

    // Control del parpadeo del cursor
    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return `${text}${blink ? "|" : " "}`; // Agrega el cursor al final del texto
}
