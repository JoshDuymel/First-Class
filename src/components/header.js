import React from 'react';
import red from '../Assets/red.jpg';

export default function Header() {
    return (
        <nav className="leNav">
        <a>Page 1</a>
        <a>Page 2</a>
        <a>Page 3</a>
        <img className="logo" src={red}/>
      </nav>
    )
}
