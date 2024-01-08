import '../App.css';
import Card from '../components/card';

export default function Home(){
    return(
        <div className='home'>
            <Card
             imagem = 'calca.jpeg'
             titulo = 'Calças'
             texto = 'Confira as últimas opções de calças da nossa loja. Temos opções masculinas e femininas.'
             botao = 'Ver opções'
             rota = 'Teste'
            />
            <Card
             imagem = 'camiseta.jpeg'
             titulo = 'Camisetas'
             texto = 'As mais variadas opções de camisetas você encontra aqui.'
             botao = 'Ver opções'
             rota = 'Teste'
            />
            <Card
             imagem = 'moletom.jpeg'
             titulo = 'Inverno'
             texto = 'Confira nossa moda de inverno. Moletons, jaquetas, suéteres e muito mais.'
             botao = 'Ver opções'
             rota = 'Teste'
            />
        </div>
    )
}