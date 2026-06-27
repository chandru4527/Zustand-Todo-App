import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usetodoStore = create(persist((set) => ({
    todoList: [],

    addTodo: (item) => {

        const list = {
            title: item,
            completed: false
        }

        set((state) => ({
            todoList: [...state.todoList, list]
        }))
    },

    // add complete
    addComplete: (completeindex) => {

        const todolist = usetodoStore.getState().todoList
        const updatelist = [...todolist]

        updatelist[completeindex].completed = !updatelist[completeindex].completed

        set((state) => ({
            todoList:[...updatelist]
        }))

    },


    // delete 
    todoDelete:(deleteindex) => {
        const todolist = usetodoStore.getState().todoList

      const updatedlist =  todolist.filter((_,index) => index !== deleteindex)

        set(() => ({
            todoList:[...updatedlist]
        }))

    }
}), { name: "todo-lists" }))