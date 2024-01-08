import '../App.css';
import './card.css';
import { useNavigate } from 'react-router-dom';

export default function Card(props){

    const navigate = useNavigate()

    function navegar(rota){
        return navigate(`/${rota}`)
    }

    return(
        <div className='card'>
            <div className='card-img-div'><img src={props.imagem} alt='#'/></div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <button onClick={() => navegar(props.rota)}>{props.botao}</button>
        </div>
    )
}