import { useEffect, useState } from 'react';

import style from './ProjetoForm.module.css'
import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import categoria from '../../../db.json';
function ProjetoForm({btnText}) {

    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch(categoria, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategoria(data)
    })
    .catch((err) => console.log(err))
    }, []) 
    console.log(categoria)

    return (
        <form className={style.form}> 
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o nome do orçamento total"/>
            <Select name="categoriaId" text="Selecione a categoria"  />
            <Submit text={btnText} options={categoria}/>
        </form>
    )
}

export default ProjetoForm;