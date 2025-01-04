import './Header.css';
import './Vinculo.css';

function Vinculo({children, texto, href}){
    return(
        <a href={href} className="header mt-2 vinculo">
            {children}
            <span className='texto'>{texto}</span>
        </a>
    );
    
}

export default Vinculo;


