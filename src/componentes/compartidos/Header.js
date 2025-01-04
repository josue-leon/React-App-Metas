import {ReactComponent as Perfil} from '../../img/user.svg';
import {ReactComponent as Logo} from '../../img/logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="superior">
            <div className="header">
                <Logo className='imagen mr-2'></Logo>
                <a href="/" className='titulo'>Metas App</a>
            </div>
            <nav className="perfil">
                <a href="/perfil" >
                    <Perfil className='imagen'></Perfil>
                </a>
            </nav>
        </header>
    );
}

export default Header;
