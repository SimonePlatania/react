/* eslint-disable react/prop-types */

const scale = {
    c: "Celsius", 
    f: "Fahrenheit"
}

function InputTemperatura2Funz ({temperatura, scala, onChangeTemperatura}) {

    // constructor(props){
    //     super(props)

    //     this.handleChange = this.handleChange.bind(this)
    // }

    const handleChange = (e) => {
        onChangeTemperatura(e.target.value)
    }


        return (
            <fieldset>
                <legend>Inserisci la temperatura in gradi {scale[scala]}: </legend>
                <input type="text" value={temperatura} onChange= {handleChange}/>
            </fieldset>
        )
    }

export default InputTemperatura2Funz