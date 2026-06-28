import React, { useState } from 'react'
import { usetodoStore } from './store/todostore'

import { FaTrash, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

export const Todo = () => {

  const { todoList, addTodo, addComplete, todoDelete, increaseQty, decreaseQty } = usetodoStore();

  const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!list) {
      return
    }

    addTodo(list)
    setList('')
  }

  console.log(todoList)

  return (
    <>
      <section className='w-full min-h-screen p-2 flex items-center justify-center bg-linear-to-br from-blue-400 to-green-400'>

        <div className='w-full max-w-md border border-gray-300 p-4 rounded bg-white'>
          {/* heading */}
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5'>Todo App</h1>

          {/* form */}
          <div>
            <form onSubmit={handleSubmit}>

              <div className='' >
                <input
                  value={list}
                  onChange={(e) => setList(e.target.value)}
                  type="text"
                  placeholder='Enter a Task'
                  className='w-full border border-gray-500 rounded px-3 py-3 focus:outline-blue-500' />
              </div>


              {/* btn */}
              <button type='submit'
                className='bg-blue-600 w-full mt-5 py-2 text-white font-bold rounded cursor-pointer hover:bg-blue-700'>
                Add Product
              </button>
            </form>
          </div>

          <div className="mt-5 border border-gray-400 p-2 flex flex-col grow rounded">

            <h1 className='mb-2 font-semibold'>Products List:</h1>
            {

              todoList.length <= 0 ? (

                <p className='text-center'>No Products yet</p>

              ) : (<div>

                {todoList.map((item, index) => (

                  <div key={index}
                    className='flex flex-col gap-2'>

                    <li className='flex items-center justify-between p-2 mb-2 border border-gray-300 rounded '>

                      <h1 className='font-bold capitalize flex-1'>{item.title}</h1>

                      <div className='flex items-center gap-2'>
                        <button disabled={item.completed} onClick={() => decreaseQty(index)}> <FaMinusCircle /> </button>
                        <span>{item.qty}</span>
                        <button disabled={item.completed} onClick={() => increaseQty(index)}> <FaPlusCircle /> </button>
                      </div>

                      <div className='flex gap-2 ml-5'>
                        <button
                          className={`${item.completed ? "bg-green-600 hover:bg-green-700" : "bg-sky-600 hover:bg-sky-700"} text-white px-2 py-1 rounded cursor-pointer transition-all`}
                          onClick={() => addComplete(index)}>
                          {item.completed ? "Ordered" : "Order"}
                        </button>

                        <button onClick={() => todoDelete(index)}
                          className='bg-red-600 hover:bg-red-700 transition-all cursor-pointer text-white px-2 py-1 
                          rounded flex items-center'>
                          <span><FaTrash /></span>
                        </button>
                      </div>

                    </li>

                  </div>
                ))}
              </div>)
            }
          </div>
        </div>
      </section>

    </>
  )
}
