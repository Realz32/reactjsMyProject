const Contador = () => {


    console.log('Aqui hay un render del componente Contador');

    const [suma, setsuma] = useState(0)

    const addHandler = () =>{
        setSuma(suma + 1)
    }

    const resHandler = () =>{
        setSuma(suma - 1)
    }


  return (
    <>  
    
    <div>Contador</div>
    <button onClick={resHandler}> - </button>
    <strong > 0 </strong>
    <button onClick={addHandler}> + </button>

    </>
    )
}
export default Contador