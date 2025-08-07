import './CalcDollar.css'

function CalcDollar () {

    
    return (
        <>
        <form className='w-25 m-auto pt-5 pb-5'>
            <div className="form-group mb-3">
                <label htmlFor="reais" className='form-label'>Valor em Reais</label>
                <input type="text" className="form-control" id="reais" /> 
            </div>
            <div className="form-group mb-3">
                <label htmlFor="reais">Cotação do dolar</label>
                <input type="text" className='form-control' id="cotação" /> 
            </div>
            <button type="button" className="btn btn-primary w-100">Calcular</button>
        </form>
        </>
    )
}

export default CalcDollar