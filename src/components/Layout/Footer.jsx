import React from 'react';

function Footer() {
    return ( 
        <div className="container bottom-0">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        ZHANDOS!
                    </a>
                    <span className="text-muted">© 2022, Template by e-cars</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/beyablod"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
     );
}

export default Footer;