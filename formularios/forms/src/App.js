import React, { useState } from 'react';

const App = () => {
    const [value, setValue] = useState({ 
        normal:'', 
        texto:'', 
        select:'', 
        check: false, 
        estado: 'feliz' })
    const handleChange = ({ target }) => {
        console.log(target.type, target.checked);
        console.log(target.name);
        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox'
                ? target.checked
                : target.value
        }))
    }
    console.log(value);
    return (
        <div>
            {value.normal.length < 5 ? <span>Longitud mínima de 5</span> : null}
            <input name='normal' type='text' value={value.normal} onChange={handleChange} />
            <textarea name='texto' onChange={handleChange} value={value.texto} />

            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>-- Sleccione --</option>
                <option value='chanchofeliz'>Chancho feliz</option>
                <option value='chanchitofeli'>Chanchito feli</option>
                <option value='chanchitotriste'>Chanchito triste</option>
                <option value='Feli'>Feli</option>
            </select>


            {/* Input tipo Checkbox
            Este tipo de input no rescibirá una propiedad de tipo value, sino una llamado checked.
             */}
            <input
            type='checkbox'
            name='check'
            onChange={handleChange}
            checked={value.check}
            />

             <div>
                 <label>Chancho: </label>
                 <input 
                 onChange={handleChange} 
                 type='radio' 
                 value='feliz' 
                 name='estado'
                 checked={value.estado === 'feliz' ? true : false}
                 /> 
                 Feliz
                 <input
                 onChange={handleChange} 
                 type='radio' 
                 value='triste' 
                 name='estado'
                 checked={value.estado === 'triste' ? true : false}
                 /> 
                 Triste
                 <input 
                 onChange={handleChange} 
                 type='radio' 
                 value='feli' 
                 name='estado' 
                 checked={value.estado === 'feli' ? true : false}
                 /> 
                 Feli
             </div>

        </div>
    )
}

export default App
