import React from 'react'

class ProvaComponenteClasse extends React.Component {
    render(){
        return <h2>Hello, {this.props.nome}</h2>
    }
}

export default ProvaComponenteClasse