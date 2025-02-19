import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`


const BarraLateral = () => {

    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="public\icones\home-ativo.png"
                        iconeInativo="public\icones\home-inativo.png"
                        ativo
                    >
                        Inicio
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\icones\mais-vistas-ativo.png"
                        iconeInativo="public\icones\mais-vistas-inativo.png"
                        ativo
                    >
                        Mais vistas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\icones\mais-curtidas-ativo.png"
                        iconeInativo="public\icones\mais-curtidas-inativo.png"
                        ativo
                    >
                        Mais curtidas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\icones\novas-ativo.png"
                        iconeInativo="public\icones\novas-inativo.png"
                        ativo
                    >
                        Novas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\icones\surpreenda-me-ativo.png"
                        iconeInativo="public\icones\surpreenda-me-inativo.png"
                        ativo
                    >
                        Surpreenda-me
                    </ItemNavegacao>


                </ListaEstilizada>
            </nav>
        </aside>
    )

}

export default BarraLateral