import { useState } from 'react';
import Mensagem from '../Mensagem/Mensagem';
import './FormDados.css';

const FormDados = () => {
    const [textMessengeNome, setTextMessengeNome] = useState('');
    const [textMessengeIdade, setTextMessengeIdade] = useState('');
    const [textMessengeEmail, setTextMessengeEmail] = useState('');
    const [inputNome, setInputNone] = useState('');
    const [inputIdade, setInputIdade] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const handleChangeNome = (event) => {
        setInputNone(event.target.value);
    }

    const handleChangeIdade = (event) => {
        setInputIdade(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setInputEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextMessengeNome(inputNome);
        setTextMessengeIdade(inputIdade);
        setTextMessengeEmail(inputEmail);
        setInputNone('');
        setInputIdade('');
        setInputEmail('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-nome">Nome:</label>
                <input type="text"
                    id="input-nome"
                    placeholder='Digite seu nome'
                    value={inputNome}
                    onChange={handleChangeNome}
                />

                <label htmlFor="input-idade">Idade:</label>
                <input type="number"
                    text id="input-idade"
                    placeholder='Digite sua idade'
                    value={inputIdade}
                    onChange={handleChangeIdade}
                />

                <label htmlFor="input-email">Email:</label>
                <input type="email"
                    id="input-email"
                    placeholder='Digite seu email'
                    value={inputEmail}
                    onChange={handleChangeEmail}
                />

                <button type='submit'>Enviar</button>
            </form>
            <Mensagem>
                Seu nome é {textMessengeNome || 'usuário'}, sua idade é {textMessengeIdade || '?'} e seu email é {textMessengeEmail || '?'}
            </Mensagem>
        </>
    );
}

export default FormDados;