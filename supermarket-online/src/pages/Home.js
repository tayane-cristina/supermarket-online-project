import './Pages.css'

const Home = ({produtos}) => {
    return (
        <div>
            <h1>Aqui você acompanha todos os nossos do nosso encarte</h1>
            <ul className='ul-home'>
                {produtos && produtos.map((item) => <li key={item.id}>
                    <p><strong>Produto: </strong>{item.name}</p>
                    <p><strong>Preço: </strong>R${item.price}</p>
                </li>)}
            </ul>
        </div>
    )
};
export default Home;