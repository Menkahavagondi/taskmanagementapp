import React, { useState } from 'react'
import { addTask } from './TaskReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[duedate,setDueDate]=useState('')
    const[status,setStatus]=useState('')

    const tasks=useSelector((state)=>state.tasks)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTask({id: tasks[tasks.length- 1].id + 1 ,title, description, duedate, status}))
       navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" placeholder="please enter title" required 
                    onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <textarea className="form-control"  rows="3" placeholder="please enter description" required
                    onChange={e=>setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="duedate">DueDate</label>
                    <input type="date" name="duedate"  className="form-control"
                    onChange={e=>setDueDate(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input type="text" name="status" className="form-control"
                    onChange={e=>setStatus(e.target.value)}/>
                </div>
                <button className="btn btn-info">Submit</button>
            </form>

        </div>
      
    </div>
  )
}

export default Create
