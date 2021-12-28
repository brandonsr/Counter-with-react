const Contador = ()=>{

    const [contador, setContador] = React.useState(0)
    const plus = () =>{setContador(contador + 1)}
    const minus = () =>{setContador(contador - 1)}
    return (
    <div>
    <h1 className={contador < 0  ? "minus" : "plus"}>Contador: {contador}</h1>
    <hr/>
    <button onClick={plus}>Aumentar</button>
    <button onClick={minus}>Disminuir</button>
    <hr/>
    </div>
    )
}