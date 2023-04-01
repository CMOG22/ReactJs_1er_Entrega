import './App.css'
import { Producto } from './Producto/Producto.jsx'
import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navbar />
      <Producto mensaje1 />
    </div>
  )
}