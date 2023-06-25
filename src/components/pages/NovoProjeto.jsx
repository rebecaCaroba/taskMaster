import styles from './Pages.module.css'
import style from './NovoProjeto.module.css'
import ProjetoForm from '../projeto/ProjetoForm';


function NovoProjeto() {
    return (
        <div className={`${styles.content} ${style.novoprojeto_container}`}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto;