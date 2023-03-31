import {useEffect} from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input `
    background-color: #6cf90e;
    width: 100%;
    border: none;
    padding: 10px;
    color: #07291b;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    transition: background-color .4s ease;
    margin-top: 30px;

    &:hover {
        background-color: #51c106;
        cursor: pointer;
    }

  `

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [moneda ,SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  const [criptoMoneda ,SelectcriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)  

  useEffect( () => {
      const consultarAPI = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(URL)
      const resultado = await respuesta.json()
  
      
      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName
        }

        return objeto
      })

        setCriptos(arrayCriptos)

   }
  consultarAPI();    

  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if([moneda, criptoMoneda].includes('')){
      setError(true)
      return
    }
      setError(false)
      setMonedas({
        moneda,
        criptoMoneda
      })
  }


  return (
  <>
      {error && <Error>Todos los campos son obligatorios </Error>}
      <form
      onSubmit={handleSubmit}
      
      >
        <SelectMonedas/>
        <SelectcriptoMoneda/>
        

        
        
        <InputSubmit 
        type="submit" 
        value="Cotizar"
        />
      </form>
    </>
  )
    
}

export default Formulario
