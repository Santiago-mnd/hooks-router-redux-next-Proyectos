import React, { useRef } from 'react';

const App = () => {
    const ref = useRef()
    const inputRef = useRef()
    const click = () => {
        console.log(ref.current.clientHeight)
        // Auque se puede acceder y modificar los valores, NO se hace desde aquí, pues es una mala práctica.
        ref.current.innerHTML = 'Chanchito feli'
    }
    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>lala</div>
        </div>
    )
}

export default App
