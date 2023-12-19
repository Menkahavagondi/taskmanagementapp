import { createSlice } from "@reduxjs/toolkit";
import { tasksList } from "./Data";


const taskSlice=createSlice({
    name:'data',
    initialState: tasksList,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        },
        updateTask:(state,action)=>{
            const{id, title, description, duedate, status}=action.payload ;
            const uu=state.find(tasks=>tasks.id==id);
            if(uu){
                uu.title=title;
                uu.description=description;
                uu.duedate=duedate;
                uu.status=status
            }
        },
        deleteUser:(state,action)=>{
            const{id, title, description, duedate, status}=action.payload ;
            const uu=state.find(tasks=>tasks.id==id);
            if(uu){
                return state.filter(f => f.id !==id);
            }

        }
    }
})
export const {addTask,updateTask,deleteUser}=taskSlice.actions;
export default taskSlice.reducer;