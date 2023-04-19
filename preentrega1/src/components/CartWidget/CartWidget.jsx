import { ClassAttributes } from "./style/cartWidget.css";

export const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="btn btn-dark cart">
        <i className="fas fa-shopping-cart fa-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </i>
      </button>
      <p>{cantCarrito}</p>
    </>
  )
}