import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { updateTask } from '../TaskReducer';
import { useDispatch } from 'react-redux';


function Update() {
    const {id}=useParams();
    const tasks=useSelector((state)=>state.tasks)
    const existingTask=tasks.filter(f=>f.id == id);
    const {title, description, duedate, status}=existingTask;
    const[utitle,setTitle]=useState(title)
    const[udescription,setDescription]=useState(description)
    const[uduedate,setDueDate]=useState(duedate)
    const[ustatus,setStatus]=useState(status)
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleUpdate=(event)=>{
        event.preventDefault();
        dispatch(updateTask({
            id:id,
            title:utitle,
            description:udescription,
            duedate:uduedate,
            status:ustatus
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update Task</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" placeholder="please enter title" required 
                    value={utitle} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <textarea className="form-control"  rows="3" placeholder="please enter description" required
                    value={udescription} onChange={e=>setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="duedate">DueDate</label>
                    <input type="date" name="duedate"  className="form-control"
                    value={uduedate} onChange={e=>setDueDate(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input type="text" name="status" className="form-control"
                    value={ustatus} onChange={e=>setStatus(e.target.value)}/>
                </div>
                <button className="btn btn-info">Update</button>
            </form>

        </div>
      
    </div>
  )
}

export default Update
