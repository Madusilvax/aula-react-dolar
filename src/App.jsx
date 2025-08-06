import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Titulo from './Titulo'
import Rodape from './Rodape'
import Menu from './Menu'

function App() {


  return (
    <>
      <div cLassName='container'>
        <Titulo />
        <Menu />
      </div>
      <Rodape />

    </>
  )
}

export default App
