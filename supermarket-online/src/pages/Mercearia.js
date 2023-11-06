import './Pages.css'
import { useState } from 'react'

const Mercearia = ({produtos}) => {

    const [filtro, setFiltro] = useState(null)

    const handleClick = ({target}) => {

        setFiltro(target.value)
    }

    return (
        <div className='ul-mercearia'>
            <h1>Aqui você acompanha todos os nossos produtos do setor de Merceária</h1>
            <div className='div-mercearia-filter'>
                <aside className='aside-mercearia'>
                    <ul className='ul-aside-filter'>
                        <li className='li-aside-filter'><button onClick={handleClick}>Cereais</button></li>
                        <li className='li-aside-filter'>Conservas</li>
                        <li className='li-aside-filter'>Massas</li>
                    </ul>
                </aside>
                <ul>
                    {produtos && produtos.filter(({category}) => category === "Azeite")
                    .map((item) => <li key={item.id}>Nome: {item.name}</li>)}
                </ul>
            </div>
            
        </div>
    )
};
export default Mercearia;