import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
export const Checkout = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        console.log(datForm)
        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple
        console.log(cliente)
        e.target.reset() //Reset form
    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="celular" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="emailRepetido" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="curp" className="form-label">CURP</label>
                                <input type="number" className="form-control" name="curp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rfc" className="form-label">RFC</label>
                                <input type="number" className="form-control" name="rfc" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="circulacion" className="form-label">Licencia de conducir</label>
                                <input type="number" className="form-control" name="circulacion" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label><br></br>
                                <textarea className="form-control" id="direccion" name="direccion" rows="4" cols="150" required ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}