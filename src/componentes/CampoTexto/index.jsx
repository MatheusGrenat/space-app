import styles from './CampoTexto.module.css';

export default function CampoTexto() {
    return(
        <>
            <input type="text" placeholder={`O que você procura?`} className={styles.campoTexto}/> 
            
        </>
    )
}

