import React, { Component } from "react";
import './utility/bello.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            cognome: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    validateForm = () => {
        const { nome, cognome, email, password } = this.state;

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

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            alert("Utente registrato con successo")
            console.log('Form inviato', this.state);
            console.log(`nome: ${this.state.nome}, cognome: ${this.state.cognome}, email: ${this.state.email}, password: ${this.state.password}`)
        }
    }

    resetForm = () => {
        this.setState({
            nome: '',
            cognome: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div className="mio-div">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        required
                        value={this.state.nome}
                        onChange={this.handleChange}/><br /><br />

                    <input
                        type="text"
                        name="cognome"
                        placeholder="Cognome"
                        required
                        value={this.state.cognome}
                        onChange={this.handleChange}/><br /><br />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}/><br /><br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}/><br /><br />

                    <button
                        type='button'
                        className="btn reset"
                        onClick={this.resetForm}>
                        Reset form
                    </button>
                    
                    <button
                        type="submit"
                        className="btn registrati"
                        disabled={!this.validateForm()}
                    >
                        Registrati
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;