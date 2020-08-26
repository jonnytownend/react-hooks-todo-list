import React from 'react'
import styled from 'styled-components'

import { TodosContext } from '../context/todos.context'

import TodoItem from './todo-item.component'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const ButtonFloatRight = styled.button`
    float: right;
`

const TodoList = () => {
    const { 
        todos,
        loading,
        addTodo,
        removeTodo,
        toggleTodo,
        clearTodos
    } = React.useContext(TodosContext)
    const [inputText, setInputText] = React.useState('')

    const handleTextChange = (e) => {
        setInputText(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputText != '') {
            addTodo(inputText)
        }
        setInputText('')
    }

    const handleOnCheckboxToggle = (id) => {
        toggleTodo(id)
    }

    const handleRemoveTodo = (id) => {
        removeTodo(id)
    }

    const handleClearCompletedTodos = () => {
        clearTodos()
    }

    return (
        <Container>
            {loading ? <p>Loading...</p> :
            <>
                {todos.length == 0 ? <p>You have no todos today. Add one!</p> : <h3>Todos for today</h3>}
                <div>
                    {todos.map(todo =>
                        <TodoItem
                            todo={todo}
                            onCheckboxToggle={handleOnCheckboxToggle}
                            onRemoveTodo={handleRemoveTodo}
                            key={todo.id}
                        />
                    )}
                </div>
                <div>
                    <input type='text' value={inputText} onChange={handleTextChange} />
                    <button onClick={handleAddTodo}>Add</button>
                    <ButtonFloatRight onClick={handleClearCompletedTodos}>Clear all</ButtonFloatRight>
                </div>
            </>
            }
        </Container>
    )
}

export default TodoList