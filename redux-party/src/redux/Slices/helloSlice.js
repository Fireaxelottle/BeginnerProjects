import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { 
        id: 1,
        name: 'Americayaaaa!',
        
    }
]

export const helloSlice = createSlice({
    name: 'hellos',
    initialState: initialState,
    reducers: {
        addHello: (state, action) => {
        const newTodo = {
            id: state.length + 1,
            name: action.payload.name,

        }
            state.push(newTodo)
        }
    }
})

export const { addHello } = helloSlice.actions
export default helloSlice.reducer