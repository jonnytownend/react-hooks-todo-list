import React from 'react'
import styled from 'styled-components'

import { TodosContext } from '../context/todos.context'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: grey;
`

const Header = () => {
    const { todoCount, completedTodoCount } = React.useContext(TodosContext)

    return (
        <Container>
            <h1>Todos</h1>
            <h3>{completedTodoCount} / {todoCount} completed</h3>
        </Container>
    )
}

export default Header