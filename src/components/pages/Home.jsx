import styles from './Pages.module.css';
import style from './Home.module.css';
import savings from '../../assets/savings.png';
import LinkButton from '../layout/LinkButton';


function Home() {
    return (
        <div className={ `${styles.content} ${style.home_container}` }>
            <h1>Bem-vindo ao <span>TaskMaster</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text="Criar projeto"/>
            <img src={savings} alt="taskmaster" />
        </div>
    )
}

export default Home;