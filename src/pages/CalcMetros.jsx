import { FcRuler } from "react-icons/fc";
function CalMetros(){

const Caucular = (function () {
    const centimetro = document.getElementById("centimetro").value
    const total = centimetro / 100
    alert("o valor convertido para centimetros é:" + total + "cm")
})

return (
    <>
        <form className='w-25 m-auto pt-5 pb-5'>

            <div className="form-group mb-3">
                <label htmlFor="metro">Valor de Centimetros em metros</label>
                <input type="text" className="form-control" id="centimetro" />
            </div>
            <button type="button" onClick={Caucular} className="btn btn-primary w-100"><FcRuler size={20} color='black'/>Calcular</button>
        </form>

    </>
)
}



export default CalMetros
