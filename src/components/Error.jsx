import styled from "@emotion/styled"

const Texto = styled.div `
    background: #ff0000;
    color: #fff;
    padding: 15px; 
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius: 20px;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error
