import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { deleteUser } from '../TaskReducer';

export default function Home() {

    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3010/tasks")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    const tasks=useSelector((state)=>state.tasks)
    console.log(tasks)
    const dispatch=useDispatch();

    const handleDelete =(id)=>{
        dispatch(deleteUser({id:id}))
    }

    return (
    <div className='container'>
        <h2>Task Management App</h2>
         {/* {JSON.stringify(data)}  */}
        <Link to='/create' className='btn btn-success my-3'>Add New Task</Link>
        <hr/>
        <h3>List of Tasks</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>DueDate</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                 {tasks.map((task,index)=>(
                    <tr key={index}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.duedate}</td>
                    <td>{task.status}</td>
                    <td>
                        <Link to={`/edit/${task.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                        <button onClick={()=>handleDelete(task.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>
                </tr>
                ))} 
            
            </tbody>
        
        </table>      
    </div>
  )
}
