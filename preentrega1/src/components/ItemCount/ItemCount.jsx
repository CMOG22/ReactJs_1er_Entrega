import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <>
      
      <p>
        <button className="btn" onClick={minus}>-</button>
        {count}
        <button className="btn" onClick={sum}>+</button>
      </p>
      <button className="btn" onClick={reset}>Reset</button><br /><br />
      <button className="btn" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}