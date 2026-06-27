import React, { useState } from 'react'
import { usetodoStore } from './store/todostore'

export const Todo = () => {

  const { todoList, addTodo, addComplete, todoDelete } = usetodoStore();

  const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!list) {
      return
    }

    addTodo(list)
    setList('')
  }

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
                  placeholder='Enter a task'
                  className='w-full border border-gray-500 rounded px-2 py-3 focus:outline-blue-500' />
              </div>


              {/* btn */}
              <button type='submit'
                className='bg-blue-600 w-full mt-5 py-2 text-white font-bold rounded cursor-pointer hover:bg-blue-700'>Add</button>
            </form>
          </div>

          <div className="mt-5 border p-2 flex flex-col grow rounded">
            <h1 className='mb-2 font-semibold'>Tasks List:</h1>
            {

              todoList.length <= 0 ? (

                <p className='text-center'>no tasks yet</p>

              ) : (<div>

                {todoList.map((item, index) => (

                  <div key={index}
                    className='flex flex-col gap-2'>

                    <li className='flex items-center justify-between p-2 mb-2'>

                      <span className=''>{item.title}</span>

                      <div className='flex gap-2'>
                        <button
                          className={`${item.completed ? "bg-green-600" : "bg-blue-500"} text-white px-2 py-1 rounded`}
                          onClick={() => addComplete(index)}>
                          {item.completed ? "completed" : "complete"}
                        </button>

                        <button onClick={() => todoDelete(index)}
                          className='bg-red-600 text-white px-2 py-1 rounded'>
                          delete
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
