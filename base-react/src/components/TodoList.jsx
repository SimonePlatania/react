import { useState } from "react";

function TodoList() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    const aggiungiElemento = (e) => {
        setText(e.target.value);
    }

    const newTask = (e) => {
        e.preventDefault(); // Previene il ricaricamento della pagina
        
        // Trim per rimuovere spazi all'inizio e alla fine
        const trimmedText = text.trim();
        
        // Aggiungi il task solo se non è vuoto
        if (trimmedText) {
            setTasks([...tasks, trimmedText]);
            setText(''); // Resetta l'input
        }
    }

    const rimuoviTask = (indexDaRimuovere) => {
        // Filtra i task escludendo quello con l'indice specifico
        const nuoviTask = tasks.filter((_, index) => index !== indexDaRimuovere);
        setTasks(nuoviTask);
    }

    return (
        <div>
            <form onSubmit={newTask}>
                <input 
                    type="text"
                    value={text}
                    onChange={aggiungiElemento}
                    placeholder="Inserisci un nuovo task"
                />
                <button type="submit">Aggiungi Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => rimuoviTask(index)}>Fatto</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;