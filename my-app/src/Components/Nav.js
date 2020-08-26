import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item ">
                    <Link to='home'>
                        <img height='60px' width='60px' src='https://www.pinclipart.com/picdir/big/118-1181237_original-inventory-clipart-png-download.png' />
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='home'>
                        <h3 className="text-white" color='white'>IMS</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;