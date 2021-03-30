import React, {useState} from 'react'

const AddTodo = (props) => {
    const [ userInput, setUserInput ] = useState('')
    const { list, setList } = props

    const addToList = () => {
        setList([...list, userInput])
        setUserInput('')
    }

    return(
        <div>
            <input value={userInput} onChange={e => setUserInput(e.target.value)} placeholder='Add a todo!'/>
            <button onClick={addToList}>Submit</button>
        </div>
    )
}

export default AddTodo