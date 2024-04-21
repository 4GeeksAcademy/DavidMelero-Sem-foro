import React, {useState} from "react";

export const Semaforo = () => {
    //1.js
    const [color, setColor] = useState('')
  

    return (
        <div className="">
            <div className="largoSemaforo"></div>

            <div className="semaforo">
             <button onClick={() => setColor('rojo')} className={'rojo ' + (color ==='rojo' ? 'rojoOn' : '')}></button>
             <button onClick={() => setColor('naranja')} className={'naranja ' + (color ==='naranja' ? 'naranjaOn': '')}></button>
             <button onClick={() => setColor('verde')} className={'verde ' + (color === 'verde' ? 'verdeOn' : '')}></button>
            </div>
        </div>
        
    )
}

