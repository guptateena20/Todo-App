import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchTodoData = () => {
    return axios.get('http://localhost:4000/todos')
}

const addTodoData = (todo) => {
    console.log("todo", todo);
    return axios.post('http://localhost:4000/todos', todo)
}

const deleteTodoData = (id) => {
    console.log("id", id);
    return axios.delete(`http://localhost:4000/todos/${id}`)
}



const editTodoData = (id) => {
    return axios.patch(`http://localhost:4000/todos/${id}`)
}

export const useTodoData = () => {
    return useQuery("todos", fetchTodoData)
}



export const useAddTodoData = () => {
    const queryClient = useQueryClient()
    return useMutation(addTodoData, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    })
}

export const useDeleteTodoData = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteTodoData
        , {
            onSuccess: () => {
                queryClient.invalidateQueries('todos')
            }
        }
    )
}


export const useEditTodoData = () => {
    const queryClient = useQueryClient()
    return useMutation(editTodoData, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    })
}





