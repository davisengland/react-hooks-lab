import React, {useState} from 'react'

const List = (props) => {
    const {list} = props

    const mappedList = list.map((todo, i) => <h2 key={i}>{todo}</h2>)

    return(
        <div>
            {mappedList}
        </div>
    )
}

export default List