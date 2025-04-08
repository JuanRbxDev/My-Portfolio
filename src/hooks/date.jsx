import { useState, useEffect } from "react";

function ObtenerHora() {
    const [horaActual, setHoraActual] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraActual(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <p>{horaActual.toLocaleTimeString()}</p> // 👈 esto es lo que va a renderizar
    );
}

export default ObtenerHora;
