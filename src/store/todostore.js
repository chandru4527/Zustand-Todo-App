import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usetodoStore = create(persist((set) => ({
    todoList: [],

    addTodo: (item) => {

        const list = {
            title: item,
            completed: false,
            qty: 1
        }

        set((state) => ({
            todoList: [...state.todoList, list]
        }))
    },

    // add complete
    addComplete: (completeindex) => {

        set((state) => ({
            todoList: state.todoList.map((item, index) =>
                index === completeindex ? { ...item, completed: !item.completed } : item
            )
        }))

    },


    // delete 
    todoDelete: (deleteindex) => {

        set((state) => ({
            todoList: state.todoList.filter((item, index) =>
                index !== deleteindex)
        }))

    },

    // increase
    increaseQty: (updateindex) => {

        set((state) => ({
            todoList: state.todoList.map((item, index) =>
                index === updateindex ? { ...item, qty: item.qty + 1 } : item
            )
        }))
    },

    // decrease
    decreaseQty: (updateindex) => {

        set((state) => ({
            todoList: state.todoList.map((item, index) =>
                index === updateindex ? { ...item, qty: Math.max(1, item.qty - 1) } : item
            )
        }))

    }
}), { name: "todo-lists" }))