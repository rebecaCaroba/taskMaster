import { useEffect, useState } from 'react';
import style from './ProjetoForm.module.css'
import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import categoria from '../db.json';
function ProjetoForm({btnText}) {
    return (
        <form className={style.form}> 
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o nome do orçamento total"/>
            <Select name="categoriaId" options={categoria.categoria} text="Selecione a categoria"  />
            <Submit text={btnText} />
        </form>
        
    )
}

export default ProjetoForm;