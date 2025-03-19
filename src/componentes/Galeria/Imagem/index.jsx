import fotos from "../../../fotos.json"

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
                    <h3>{foto.titulo}</h3>
                    <h4>{foto.fonte}</h4>
                <footer>
                    <button>Favorito</button>
                    <button>Expandir</button>
                </footer>
            </div>
            ))}
        </figure>
    )
} 

export default Imagem