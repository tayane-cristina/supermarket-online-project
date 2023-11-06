import { useState, useEffect } from 'react'


const useFetch = (url) => {

    //ESTADOS PARA GUARDAR OS DADOS
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    //const [itemId, setItemId] = useState(null)


    //ESTADOS PARA REFATORAR OS DADOS
    //const [config, setConfig] = useState(null)
    //const [method, setMethod] = useState(null)
    //const [callFetch, setCallFetch] = useState(false)

    //FUNÇÃO QUE DETERMINA O QUE VAI ESTAR DENTRO DO MEU ESTADO DATA:
    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json)
                
            } catch (error) {
                console.log(error.message)
                setError("Erro ao carregar os dados")
            };
            setLoading(false)
        }
        fetchData()

    }, [url])



    //FUNÇÃO QUE DETERMINA QUAL VAI SER O MÉTODO DA REQUISIÇÃO:


    // FUNÇÃO QUE DETERMINA QUAL 


    return { data, loading, error}
} 

export default useFetch;