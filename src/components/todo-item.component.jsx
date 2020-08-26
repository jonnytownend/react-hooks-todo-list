import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    &>* {
        margin-right: 10px;
    }
`

const Checkbox = styled.div`
    border: 1px solid black;
    width: 20px;
    height: 20px;
    background-color: ${props => props.checked ? 'green' : 'white'}
`

const TodoItem = ({todo, onCheckboxToggle, onRemoveTodo}) => {
    const {title, checked, id} = todo
    return (
        <Container>
            <Checkbox checked={checked} onClick={() => onCheckboxToggle(id)} />
            <p>{title}</p>
            <button onClick={() => onRemoveTodo(id)}>X</button>
        </Container>
    )
}

export default TodoItem