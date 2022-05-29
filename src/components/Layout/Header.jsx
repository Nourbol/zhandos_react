import React from 'react';

function Header() {
    return ( 
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo of Zhandos" className='w-50'/>
            </a>
            <nav>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className="nav-link px-2 link-info">Home</a></li>
                    <li><a href="/posts/lost" className="nav-link px-2 link-info">Lost</a></li>
                    <li><a href="/posts/found" className="nav-link px-2 link-info">Found</a></li>
                    <li><a href="/shelters" className="nav-link px-2 link-info">Shelters</a></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;
