import './Principal.css';
import Vinculo from './Vinculo';
import {ReactComponent as Nuevo} from '../../img/add.svg';
import {ReactComponent as Lista} from '../../img/lista.svg';

function Principal({ children }) {
    return (
        <div className="principal nm-convex-gray-100">
            <aside className='aside'>
                <Vinculo href="/lista" texto="Lista">
                    <Lista className='imagen'></Lista>
                </Vinculo>
                <Vinculo href="/crear" texto="Crear">
                    <Nuevo className='imagen'></Nuevo>
                </Vinculo>
            </aside>
            <main className='main'>
                {children}
            </main>

        </div>
    );
}

export default Principal;
