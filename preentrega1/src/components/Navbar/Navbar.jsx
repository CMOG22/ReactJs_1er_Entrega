import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        CMOG
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Computadoras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Smartphone</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Impresoras</a>
                            </li>
                            
                        </ul>

                        <CartWidget cantCarrito={0} />

                    </div>
                    </div>
                </nav>
            
        </div>
        
    )
}