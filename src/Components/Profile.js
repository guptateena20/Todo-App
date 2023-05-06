import React, { useState } from 'react'
import { useTodoData, useAddTodoData, useDeleteTodoData, useEditTodoData } from '../Hooks/useTodoData'
import { FiEdit } from 'react-icons/fi'
import { BsTrash3 } from 'react-icons/bs'
import "../Styles/todo.css"
import { useAuth0 } from '@auth0/auth0-react'


const TodoList = () => {
    const { isAuthenticated, isLoading } = useAuth0()
    console.log(isAuthenticated);

    const [value, setValue] = useState("")
    const [display, setDisplay] = useState(false)

    const { data, isError, error } = useTodoData()

    const { mutate: addTodo } = useAddTodoData()
    const { mutate: deleteTodo} = useDeleteTodoData()
    const { mutate: editTodo } = useEditTodoData();

    const handleAddTodo = (e) => {
        if (value === "") {
            setDisplay(true)
        }
        if (value) {
            setDisplay(false)
            e.preventDefault();
            setValue('')
            console.log({ value });
            const todo = { value }
            addTodo(todo)
        }
    }

    const handleDeleteTodo = (id) => {
        deleteTodo(id)
    }

    // const handleEditTodo = (value, id) =>{
    //     setValue(value)
    //     // deleteTodo(id)
    //     editTodo(value)
    // }

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (

        <>
            {display && <div className='display_div'>
                <p>You must have to add an Item.</p>
            </div>}
            <div className='main_div'>
                <h2>Add your List Here </h2>
                <div className='input_div'>
                    <input className="input_todo" type="text" placeholder="Add Item..." onChange={(e) => setValue(e.target.value)} value={value.charAt(0).toUpperCase() + value.slice(1)} />
                    <button className="add_btn" onClick={handleAddTodo}>Add</button>
                </div>

                <div className='todo_div'>
                    {
                        data?.data.map((item, id) => {
                            return (
                                <div key={id} className='todo_list_div'>
                                    <input type="text" defaultValue={item.value} />
                                    <button className='edit_btn'><FiEdit /></button>

                                    <button className='delete_btn' onClick={() => handleDeleteTodo(item.id)}><BsTrash3 /></button>


                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>

    )
}

export default TodoList




