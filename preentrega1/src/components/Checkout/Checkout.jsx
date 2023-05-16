import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"

export const Checkout = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    let navigate = useNavigate()
    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()

        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple
        
        const aux = [...carrito]
        //recorrer el carro y descontar el stock
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) {
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD, prodBBD)
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                }
            })
        })

        const aux2 = aux.map(prod => ({ 
            id: prod.id, 
            quantity: prod.quantity, 
            precio: prod.precio 
        }));

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-MX', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}))
        .then(ordenCompra => {
            alert(`Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para segimiento de la compra y entrega`)
            emptyCart()
            e.target.reset()//reset form
            navigate("/") //Defino la ruta hacia donde quiero redirigir
        })

        .catch(error => {
                console.error(error)
            })

        


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