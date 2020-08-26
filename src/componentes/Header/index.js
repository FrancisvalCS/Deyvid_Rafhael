import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


function Header(){
    return(
        <header className="container">
            <div className="logo">
                <Link to="/">Deyvid Rafhael</Link>
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/">Trabalhos</Link>
                <Link to="/">Sobre</Link>
                <Link to="/">Contato</Link>
                <Link to="/">Área do Cliente</Link>
            </div>
        </header>
    );
}

export default Header;