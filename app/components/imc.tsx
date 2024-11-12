'use client';
import React from "react";

export default function IMC(){
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setImc] = React.useState('');

    function handleClick() {
        const alturaMetro = +(altura) / 100;
        const total = (+(peso) / (alturaMetro * alturaMetro)).toFixed(2);
        setImc(total);
    }
    return <div>
        <label htmlFor="peso">Peso (em kg)</label>
        <input type="number" id="peso" name="peso" value ={peso} onChange={(e) => setPeso(e.target.value)}></input>
        <label htmlFor="altura">Altura (em cm)</label>
        <input type="number" id="altura" name="altura" value ={altura} onChange={(e) => setAltura(e.target.value)}></input>
        <button onClick={handleClick}>Calcular</button>
        <p>IMC: {imc}</p>
    </div>
}

