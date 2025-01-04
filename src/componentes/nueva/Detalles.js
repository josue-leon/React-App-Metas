
function Detalles() {
    const opciones = ["dia", "semanal", "mensual"];
    const iconos =["🏃", "📚", "🖥️", "🎮"];
    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input className="input" type="text" placeholder="Ej. 3-5 veces al dia" />
                </label>

                <label className="label">
                    Con que frecuencia quieres alcanzarla?
                    <div className="flex mb-6">
                        <input className="input" type="number" />
                        <select className="input">
                            {opciones.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>

                <label className="label">
                    Cuantas veces deseas completar la meta?
                    <input className="input" type="number" />
                </label>

                <label className="label">
                    Tienes una fecha limite?
                    <input  className="input" type="date" />
                </label>

                <label className="label">
                    Cuantas veces has completado la meta?
                    <input className="input" type="number" />
                </label>

                <label className="label">
                     Selecciona una imagen para tu meta
                    <div>
                        <select className="input">
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
            </form>
            <div className="flex px-4 py-3 justify-between bg-gradient-to-tr from-black to-slate-200">
                <button className="boton">Crear Objetivo</button>
                <button className="boton--blanco">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;