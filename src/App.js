import './App.css';
import {Outlet, Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import { ContextoGeral} from './context/contexto';
import { FiAlignLeft, FiArrowLeft } from "react-icons/fi";

function App() {

  const [menu, setMenu] = useState('oculto')

  function exibirMenu(){
    if(menu == 'oculto'){
      setMenu('visivel')
    } else{
      setMenu('oculto')
    }
  }

  return (
    <div className='App'>
      <aside className={`menu ${menu}`}>
        <FiArrowLeft onClick={exibirMenu} className='menu-seta'/>
      </aside>
      <header className='topo'>
        <nav>
          <FiAlignLeft onClick={exibirMenu} className='icone'/>
          <Link className='link' to='/'>Home</Link>
        </nav>
      </header> 
      <Outlet/>
      <footer className='rodape'>
          <p>Este site é totalmente fictício e é apenas um trabalho feito para por em prática as habilidades aprendidas</p>
          <p><Link className='link' to='/contatos'>Raphael Stefano Barros Erbetta</Link></p>
      </footer>
    </div>
  );
}

export default App;
