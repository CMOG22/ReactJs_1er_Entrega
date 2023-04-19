import { Link } from 'react-router-dom'
import { ClassAttributes } from './style/item.css';
//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    return (
        <div className="card cardStyle" >
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h2 className="card-title">{item.nombre} {item.modelo}</h2>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: Usd${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-dark">Detalles</button></Link>
            </div>
        </div>

    )
}