import styled from "@emotion/styled"

const Result = styled.div `
    color: #fff;
    font-family: 'Noto Serif Lao', serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    justify-content: space-between;
`
const Texto = styled.p `
  font-size: 15px;
   span {
    font-weight: 700;
   } 
`
const Precio = styled.p `
    font-size: 25px;
   span {
    font-weight: 700;
   } 
`
const Imagen = styled.img `
    display: block;
    width: 110px;
`

const Resultado = ({resultado}) => {
    const {PRICE, 
          HIGHDAY,
          LOWDAY,
          CHANGEPCT24HOUR,
          IMAGEURL,
          LASTUPDATE } = resultado
  return (
    <Result>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
        <div>
            <Precio>El precio es: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{ HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación última 24hs : <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Result>
  )
}

export default Resultado
