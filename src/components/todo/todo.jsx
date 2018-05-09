import React from 'react';
import PageHeader from '../../components/pageHeader';
import TodoForm from './todoForm';


export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
    </div>
)
