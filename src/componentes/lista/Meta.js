import estilos from './Meta.module.css';

function Meta({ id, detalles, periodo, eventos, icono, objetivo, plazo, completado }) {
    const porcentaje = (completado / objetivo) * 100;

    return (
        <div className={estilos.meta +' tarjeta'}>
            <div className="flex items-center">
                <div className={estilos.icono}>{icono}</div>
                <p className="text-xl ml-5 mr-10">
                    {eventos} /
                    <sub className="text-xs text-gray-500 ml-1">{periodo}</sub>
                </p>
                <p>{detalles}</p>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="flex-1 mx-5">
                    <p className="text-center text-sm mb-2 font-bold">
                        {completado} de {objetivo}
                    </p>
                    <div className="progress--back">
                        <div
                            className="progress--bar"
                            style={{ width: `${porcentaje}%` }}
                        ></div>
                    </div>
                </div>

                <button className="boton--azul">
                    Completado
                </button>
            </div>
        </div>
    );
}

export default Meta;
