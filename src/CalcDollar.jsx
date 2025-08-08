import './CalcDollar.css'
import { FcMoneyTransfer } from "react-icons/fc";

function CalcDollar () {

    const calcular = (function () {
        const reais = document.getElementById("reais").value
        const cotacao = document.getElementById("cotacao").value
        const total = reais / cotacao
        alert("valor convertido para dólares R$"+total)
    })
    return (
        <>
        <form className='w-25 m-auto pt-5 pb-5'>
            <div className="form-group mb-3">
                <label htmlFor="reais" className='form-label'>Valor em Reais</label>
                <input type="text" className="form-control" id="reais" /> 
            </div>
            <div className="form-group mb-3">
                <label htmlFor="reais">Cotação do dolar</label>
                <input type="text" className='form-control' id="cotacao" /> 
            </div>
            <button type="button" onClick={calcular} className="btn btn-primary w-100"><FcMoneyTransfer size={20} color='white' />Calcular</button>
        </form>
        </>
    )
}

export default CalcDollar