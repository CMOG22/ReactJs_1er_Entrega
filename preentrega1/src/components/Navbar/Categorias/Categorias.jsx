import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-home fa-lg logoCmog">
                            <img src="https://raw.githubusercontent.com/CMOG22/3er-pre-entrega.github.io/master/img/Mesa%20de%20trabajo%201.png" alt="" />
                        </i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-laptop fa-lg logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/2560px-Ford_Motor_Company_Logo.svg.png" alt="ford" />
                        </i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-mobile fa-lg logoDodge">
                            <img src="https://i.pinimg.com/originals/fa/4a/e5/fa4ae552b61265517f6472c7fd608725.png" alt="Dodge" />
                        </i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-tv fa-lg logoBmw">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" alt="BMW" />
                        </i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/4"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-headphones fa-lg logo">
                            <img src="https://i.pinimg.com/originals/8a/ee/cd/8aeecd7493f0f51bd697f935a0588268.png" alt="Audi" />
                        </i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/5"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-headphones fa-lg logoFerrari">
                            <img src="https://seeklogo.com/images/F/ferrari-logo-C75D80471C-seeklogo.com.png" alt="Ferrari" />
                        </i>
                    </button>
                </Link>
            </li>
        </ul>
    );
}