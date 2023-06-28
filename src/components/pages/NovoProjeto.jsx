import styles from './Pages.module.css'
import style from './NovoProjeto.module.css'
import ProjetoForm from '../projeto/ProjetoForm';
import { useNavigate } from 'react-router-dom';


function NovoProjeto() {

    const history = useNavigate();

    function criarPost(projetos){
        projetos.cost = 0;
        projetos.services = [];

        fetch("http://localhost:5000/projeto" , {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(projetos),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history.push('/projeto', {message: 'Porjeto criado com sucesso!'})

        })
        .catch( err => console.log(err))
    }

    return (
        <div className={`${styles.content} ${style.novoprojeto_container}`}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={criarPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto;