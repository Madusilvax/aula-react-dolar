import './CalcCentimetros.css'
import { FcRuler } from "react-icons/fc";
function CalCentimetros(){

const Caucular = (function () {
    const metro = document.getElementById("metro").value
    const total = metro * 100
    alert("o valor convertido para metros é:" + total + "m")
})

return (
    <>
        <form className='w-25 m-auto pt-5 pb-5'>

            <div className="form-group mb-3">
                <label htmlFor="metro">Valor de Metros em Centímetros</label>
                <input type="text" className="form-control" id="metro" />
            </div>
            <button type="button" onClick={Caucular} className="btn btn-primary w-100"><FcRuler size={20} color='black'/>Calcular</button>
        </form>

    </>
)
}



export default CalCentimetros