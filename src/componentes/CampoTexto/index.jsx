import styles from './CampoTexto.module.css';
import lupa from '/imagens/lupa.png';




export default function CampoTexto() {
    return(
        <>
            <input type="text" placeholder={`O que você procura?`} className={styles.campoTexto}/> 
            
        </>
    )
}

