import { Component } from "react";

class ProvaCicloDiVita2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            articolo: {
                nome: '',
                prezzo: 0,
                descrizione: '',
                categoria: ''
            }, 
            loader: false
        }
    }

    componentDidMount(){
        this.setState({
            loader: true
        })
        fetch( 'https://fakestoreapi.com/products/7' )
            .then( responseObj => responseObj.json() )
            .then( articolo => {
                console.log(articolo)

                this.setState({
                    articolo: {
                        nome: articolo.title,
                        prezzo: articolo.price,
                        descrizione: articolo.description,
                        categoria: articolo.category
                    },
                    loader: false
                })
            })
            .catch(err => console.log('Errore generico', err))
    }

    render(){
        return (
            <>
                <h2>{!this.state.loader ? 'Dettagli articolo:' : 'Caricamento in corso...'}  </h2>
                
                {
                    this.state.articolo.nome !== '' ? 
                        <div>
                            <p><b>Nome:</b> {this.state.articolo.nome}</p>
                        </div>
                    : <></>
                }
                
                {
                    this.state.articolo.prezzo > 0 ? 
                        <div>
                            <p><b>Prezzo:</b> {this.state.articolo.prezzo}</p>
                        </div>
                    : <></>
                }

                {
                    this.state.articolo.categoria !== '' ? 
                        <div>
                            <p><b>Categoria:</b> {this.state.articolo.categoria}</p>
                        </div>
                    : <></>
                }

                {
                    this.state.articolo.descrizione !== '' ? 
                        <div>
                            <p><b>Descrizione:</b> {this.state.articolo.descrizione}</p>
                        </div>
                    : <></>
                }
            </>
        )
    }
}

export default ProvaCicloDiVita2