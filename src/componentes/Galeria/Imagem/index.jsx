import styled from "styled-components"
import fotos from "../../../fotos.json"

const FigureEstilizado = styled.figure`
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 944px;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 426px;
    padding-right: 24px;
    padding-bottom: 24px;
    flex: 0 0 48%;
`

const FooterEstilizado = styled.footer`
    background-color: #001634;
    max-width: 426px;
    padding: 16px 0 16px 22px;
    border-radius: 0 0 20px 20px;

`
const ImagemEstilizada = styled.img`
    border-radius: 20px 20px 0 0;
`

const H3Estilizado = styled.h3`
    color: white;
    margin: 0;    
`
const DivFooter = styled.div`
    display: flex;
    justify-content: space-between; 
`
const DivBotao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin: 0 16px 0 0 ;
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
        <FigureEstilizado>
            {fotos.map(foto => (
            <DivCard>
                <ImagemEstilizada 
                    key={foto.id}
                    src={foto.path}
                    alt={foto.titulo}
                />
                <FooterEstilizado>
                    <H3Estilizado>{foto.titulo}</H3Estilizado>
                    <DivFooter>
                        <H4Estilizado>{foto.fonte}</H4Estilizado>
                        <DivBotao>    
                            <BotaoFavorito />
                            <BotaoExpandir />
                        </DivBotao>
                    </DivFooter>
                </FooterEstilizado>
            </DivCard>
            ))}
        </FigureEstilizado>
    )
} 

export default Imagem