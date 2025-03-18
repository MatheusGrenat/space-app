import fotos from "../../../fotos.json"

const Imagem = ({ foto }) => {
    return(
        <figure>
            <img></img>
            <figcaption>
                <footer>
                    <p></p>
                    <h3>{fotos.map(foto => foto.titulo)}</h3>
                    <h4>{fotos.map(foto => foto.fonte)}</h4>
                    <button>Favorito</button>
                    <button>Expandir</button>
                </footer>
            </figcaption>
        </figure>
    )
} 

export default Imagem