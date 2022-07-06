import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) =>{
    const [count, setCount] = useState(initial);
    
    const incrementar = () => {
        setCount(count + 1);
    };
    const decrementar= () => {
        setCount(valAnt => (valAnt > 0 ? count - 1 : count ));
    };

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={() =>{
                if (count <= stock){
                    onAdd (count)
                }
            }
         }>
            Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;