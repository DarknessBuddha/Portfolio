import React from 'react';
import '../styles/Header.css'


const Header = (props: React.HTMLAttributes<HTMLHeadElement>) => {
    return (
        <header className="header" {...props}>
            <nav className="header__left">
                <a href="/">
                    <img className="buddha-icon" src={require('../images/buddha.png')} alt="buddha"/>
                </a>
            </nav>
            <nav className="header__right">
                <a href="https://linkedin.com/in/ivan-lin-645a9b22b/">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/DarknessBuddha">
                    <i className="bi bi-github"></i>
                </a>
            </nav>
        </header>
    );
};

export default Header;