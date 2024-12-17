import React, { useState } from "react";

class Auto extends React.Component {

    constructor() {
        super()
        this.state = {color: "red"};
    }
    
        render() {
        return <h2>Ciao, sono un {this.state.color} Automobile</h2>
        }
    }
    
    export default Auto