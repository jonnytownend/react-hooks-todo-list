import React, { createContext, useEffect, useState, useReducer } from 'react'
import { firestore } from '../firebase/firebase-utils'

const INITIAL_TODOS_STATE = {
    todos: [],
    todoCount: 0,
    completedTodoCount: 0,
    loading: true,
    toggleTodo: () => {},
    addTodo: () => {},
    removeTodo: () => {},
    clearTodos: () => {}
}

const todosCollection = firestore.collection('todos')

export const TodosContext = createContext(INITIAL_TODOS_STATE)

export const TodosProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])
    const [todoCount, setTodoCount] = useState(0)
    const [completedTodoCount, setCompletedTodoCount] = useState(0)

    const toggleTodo = (id) => {
        const todo = todos.find(todo => todo.id == id)

        todosCollection.doc(id).set({
            title: todo.title,
            checked: !todo.checked,
            id
        })
    }

    const addTodo = (title) => {
        todosCollection.add({
            title: title,
            checked: false
        })
    }

    const removeTodo = (id) => {
        todosCollection.doc(id).delete()
    }

    const clearTodos = () => {
        const batch = firestore.batch()
        todos.filter(todo => todo.checked).forEach(todo => {
            const doc = todosCollection.doc(todo.id)
            batch.delete(doc)
        })
        batch.commit()
    }

    useEffect(() => {
        const listener = todosCollection.onSnapshot(snapshot => {
            var newTodos = []
            snapshot.forEach(doc => newTodos.push({id: doc.id, ...doc.data()}))
            setTodos(newTodos)
            setLoading(false)
        })

        return listener
    }, [])

    useEffect(() => {
        setTodoCount(todos.length)
        setCompletedTodoCount(todos.filter(todo => todo.checked).length)
    }, [todos])

    return (
        <TodosContext.Provider value={{
            todos,
            todoCount,
            completedTodoCount,
            loading,
            toggleTodo,
            addTodo,
            removeTodo,
            clearTodos
        }}>
            {children}
        </TodosContext.Provider>
    )
}