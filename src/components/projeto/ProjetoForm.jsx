import { useEffect, useState } from 'react';
import style from './ProjetoForm.module.css'
import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import categoria from '../db.json';
function ProjetoForm({ btnText, handleSubmit, projetoData }) {

    const [categorias, setCategotias] = useState([]);
    const [projeto, setProjeto] = useState(projetoData || {});

    useEffect(() => {
        fetch('http://localhost:5000/categoria', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategotias(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(projeto)
        // console.log(projeto)
    }


    function handleChange(e) {
        setProjeto({ ...projeto, [e.target.name]: e.target.value });
    }

    function handleCategoria(e) {
        setProjeto({
            ...projeto,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto" 
            handleOnChange={handleChange}
            value={projeto.name ? projeto.name : ''} 
            />
            
            <Input type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o nome do orçamento total" 
            handleOnChange={handleChange}
            value={projeto.budget ? projeto.budget : ''}
            />
            
            <Select name="categoriaId" 
            options={categoria.categoria} 
            text="Selecione a categoria" 
            handleOnChange={handleCategoria} 
            value={projeto.category ? projeto.category.id : ''} 
            />

            <Submit text={btnText} />
        </form>
    )
}

export default ProjetoForm;