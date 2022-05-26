import React from 'react';

function Header() {
    return ( 
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    ZHANDOS
                </a>
                <nav>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/lost" className="nav-link px-2 link-dark">Lost</a></li>
                        <li><a href="/found" className="nav-link px-2 link-dark">Found</a></li>
                        <li><a href="/shelters" className="nav-link px-2 link-dark">Shelters</a></li>
                    </ul>
                </nav>
            </header>
        </div>
     );
}

export default Header;
