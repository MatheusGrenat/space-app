import styled from "styled-components"
import fotos from "../../../fotos.json"

const FooterEstilizado = styled.footer`
    background-color: #001634;
    max-width: 426px;
    padding: 16px 0 16px 22px;
    border-radius: 20px;

`

const H3Estilizado = styled.h3`
    color: white;
    margin: 0;    
`
const DivFooter = styled.div`
    display: flex;
    justify-content: right ;
`
const BotaoFavorito = styled.button`
    background-image: url('/icones/favorito.png');
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
    padding: 0;
`
const BotaoExpandir = styled.button`
    background-image: url('icones/expandir.png');
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
    padding: 0;
`

const H4Estilizado = styled.h4`
    color: white;
    margin: 0;
    font-family: GandhiSansRegular;
`


const Imagem = ({ foto }) => {
    return(
        <figure>
            {fotos.map(foto => (
            <div>
                <img 
                    key={foto.id}
                    src={foto.path}
                    alt={foto.titulo}
                />
                <FooterEstilizado>
                    <H3Estilizado>{foto.titulo}</H3Estilizado>
                    <DivFooter>
                        <H4Estilizado>{foto.fonte}</H4Estilizado>
                        <BotaoFavorito></BotaoFavorito>
                        <BotaoExpandir></BotaoExpandir>
                    </DivFooter>
                </FooterEstilizado>
                <img src="" />
            </div>
            ))}
        </figure>
    )
} 

export default Imagem