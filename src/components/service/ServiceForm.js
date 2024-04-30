import React, { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText }) {
    const [service, setService] = useState({
        name: '',
        cost: '',
        description: ''
    });

    function submit(e) {
        e.preventDefault();
        
        // Validar entrada antes de enviar
        if (!service.name || !service.cost || !service.description) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Enviar o serviço
        handleSubmit(service);
        
        // Limpar o estado do formulário
        setService({
            name: '',
            cost: '',
            description: ''
        });
    }

    function handleChange(e) {
        setService(prevService => ({
            ...prevService,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                value={service.name}
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />

            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                value={service.cost}
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />

            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                value={service.description}
                placeholder='Insira a descrição do serviço'
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnText} />
        </form>
    );
}

export default ServiceForm;
