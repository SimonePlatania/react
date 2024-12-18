import React, { Component } from "react";
import './utility/bello.css'
import { useState } from "react";

function FormFunz() {

    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'nome') {
            setNome(value);
        } else if (name === 'cognome') {
            setCognome(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const validateForm = () => {

        const isNomeValido = nome.trim().length >= 3;
        const isCognomeValido = cognome.trim().length >= 3;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValida = emailRegex.test(email);

        const passwordLunghezza = password.length >= 8;
        const haUnaMaiuscola = /[A-Z]/.test(password);
        const haUnaMinuscola = /[a-z]/.test(password);
        const haUnNumero = /[0-9]/.test(password);

        const passwordValida =
            passwordLunghezza &&
            haUnaMaiuscola &&
            haUnaMinuscola &&
            haUnNumero;

        return isNomeValido &&
            isCognomeValido &&
            emailValida &&
            passwordValida;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Utente registrato con successo")
            console.log('Form inviato', { nome, cognome, email, password });
            console.log(`nome: ${nome}, cognome: ${cognome}, email: ${email}, password: ${password}`)
        }
    }

    const resetForm = () => {
        setNome(''),
            setCognome(''),
            setEmail(''),
            setPassword('')
    }

    return (
        <div className="mio-div">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    value={nome}
                    onChange={handleChange} /><br /><br />

                <input
                    type="text"
                    name="cognome"
                    placeholder="Cognome"
                    required
                    value={cognome}
                    onChange={handleChange} /><br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleChange} /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handleChange} /><br /><br />

                <button
                    type='button'
                    className="btn reset"
                    onClick={resetForm}>
                    Cancella
                </button>

                <button
                    type="submit"
                    className="btn registrati"
                    disabled={!validateForm()}>
                    Registrati
                </button>
            </form>
        </div>
    )
}


export default FormFunz;