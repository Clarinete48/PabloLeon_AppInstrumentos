import { useState} from 'react'

const Counter = () => {
const [count, setCount] = useState (0)

const decrement = () => {
    if (count > 0){

        setCount(count - 1)
    }
}

const increment = () => {
    setCount(count + 1)
}

const reset = () => {
    setCount(0)
}

    return(
        <div>
           <h1>{count}</h1>
           <button onClick={decrement}>Restar</button>
           <button onClick={increment}>Sumar</button>
           <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter