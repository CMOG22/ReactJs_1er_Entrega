import { ItemCount } from '../ItemCount/ItemCount'
export const Producto = ({ mensaje1 }) => {
    return (
        <>
            <div className="productoDescription">
                <img src="https://www.asus.com/media/global/gallery/t8NrsBjEg8IQZUfG_setting_xxx_0_90_end_2000.png" alt="" className="producto" />
                <h2>Asus</h2>
                <p>ASUS Chromebook C523 es la manera más sencilla de aumentar tu productividad y pasártelo mejor, desde cualquier lugar y durante todo el día. Ultraportátil y ligero, este Chromebook de 15.6" - 39.62 cm está equipado con el procesador Intel® Celeron® N3350 y hasta 10 horas1 de autonomía. Es el primer ASUS Chromebook con pantalla NanoEdge, un diseño que maximiza la pantalla y reduce las dimensiones del equipo para que dispongas de un entorno multitarea superior y de una experiencia visual más inmersiva. ASUS Chromebook C523 lleva instalado lo mejor de Google y soporta las aplicaciones de entretenimiento y productividad de la Google Play Store2. Con rápido rendimiento, seguridad avanzada y convenientes funciones, es un equipo ideal para estudiantes y usuarios con un alto grado de movilidad.</p>
                <ItemCount />
            </div>
            
        </>

    )
}