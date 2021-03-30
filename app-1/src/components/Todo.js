import React, {useState} from 'react'
import AddTodo from './AddTodo'
import List from './List'

const Todo = () => {
    const [list, setList] = useState([])

    return(
        <div>
            <AddTodo list={list} setList={setList}/>
            <List list={list}/>
        </div>
    )
}

export default Todo