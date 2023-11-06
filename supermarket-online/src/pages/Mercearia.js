import './Pages.css'
import { useState } from 'react'

const Mercearia = ({produtos}) => {

    const [filtro, setFiltro] = useState("todos os setores")

    const handleClick = (e) => {

        setFiltro(e.target.textContent)
    }

    return (
        <div className='ul-mercearia'>
            <h1>Aqui você acompanha todos os nossos produtos do setor de Merceária</h1>
            <div className='div-mercearia-filter'>
                <aside className='aside-mercearia'>
                    <h2>Busque por seção</h2>
                    <ul className='ul-aside-filter'>
                        <li className='li-aside-filter'><button onClick={handleClick}>Cereais</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Conservas</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Massas</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Sobremesa</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Biscoitos</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Diet e Light</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Perfumária</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Higiêne</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Lavanderia</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Limpeza</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Bazar</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Ambientes externos</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Bebidas I</button></li>
                        <li className='li-aside-filter'><button onClick={handleClick}>Bebidas II</button></li>
                    </ul>
                </aside>
                <ul> 
                    <h3 className='h3-mercearia'>Lista de produtos em {filtro}:</h3> 
                    {produtos && produtos.filter(({section}) => section === filtro)
                    .map((item) => <li className='li-show-products' key={item.id}>
                        <img src={item.img} alt={item.name}></img> 
                        <p><strong>categoria:</strong> {item.category} - {item.section}</p>
                        <p><strong>Nome:</strong> {item.name}</p>
                        <p><strong>Preço:</strong> R${item.price}</p>
                        </li>)}
                </ul>
            </div>
            
        </div>
    )
};
export default Mercearia;