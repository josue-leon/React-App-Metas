import Meta from "./Meta";

const metaMock = [
    {
        "id": 1,
        "detalles": "Correr por 30 minutos",
        "periodo": "dia",
        "eventos": "1",
        "icono": "🏃",
        "objetivo": "365",
        "plazo": "fecha",
        "completado": "50"
    },
    {
        "id": 2,
        "detalles": "Leer por 20 minutos",
        "periodo": "dia",
        "eventos": "1",
        "icono": "📚",
        "objetivo": "100",
        "plazo": "fecha",
        "completado": "60"
    },
    {
        "id": 3,
        "detalles": "Resolver retos por 60 minutos",
        "periodo": "dia",
        "eventos": "1",
        "icono": "🖥️",
        "objetivo": "100",
        "plazo": "fecha",
        "completado": "20"
    },
    

];

function Lista() {
    return (
        metaMock.map(meta => <Meta {...meta}> </Meta>)
    );
}

export default Lista