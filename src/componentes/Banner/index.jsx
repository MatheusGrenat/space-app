import styled from "styled-components"

const BannerEstilizado = styled.div`
    background-image: url('./imagens/foto-destaque.png');
    min-width: 1156px;
    min-height: 328px;
    background-repeat: no-repeat;
    border-radius: 20px;
    overflow: hidden;
    margin-left: 20px;
`
const ParagrafoEstilizado = styled.p`
    color: #ffffff;
    font-size: 40px;
    padding-left: 64px;
    padding-top: 92px;
    max-width: 301px;
    margin: 0%;
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