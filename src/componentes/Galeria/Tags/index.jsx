import styled from 'styled-components'
import tags from './tags.json'

const TagsEstilizadas = styled.button`
    color: white;
    padding: 10px 8px;
    background-color: #445265;
    border: none;
    border-radius: 15px;
    text-decoration: none;
    cursor: pointer;
`

const SessaoEstilizada = styled.section`
    display: flex;
    flex-direction: row;
    gap: 24px;
    min-height: 49px;
    padding-top: 56px;
    color: white;
    font-family: GandhiSansRegular;

`

const Tags = () => {
    return(
        <>
            <SessaoEstilizada> 
                <p>Busque por tags:</p>
                {tags.map(tag => <TagsEstilizadas key={tag.id}>{tag.titulo}</TagsEstilizadas>)}
            </SessaoEstilizada>
        </>
    )
}

export default Tags