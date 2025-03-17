import styled from "styled-components"

const BannerEstilizado = styled.div`
    background-image: url('./imagens/foto-destaque.png');
    flex-grow: 1;
    background-repeat: no-repeat;
    min-height: 328px;
    display: flex;
    margin: 0;
    border-radius: 20px;
    overflow: hidden;
    background-size: cover;
`
const ParagrafoEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
    padding:0 64px;
    padding-top: 92px;
    margin: 0%;
    max-width: 301px;
    font-family : GandhiSansRegular;
`



const Banner = () => {
    return(
        <>
            <BannerEstilizado>
                <ParagrafoEstilizado> 
                    A galeria mais 
                    completa de 
                    fotos do espaço!
                </ParagrafoEstilizado> 
            </BannerEstilizado>
        
        </>
    )
}

export default Banner