import { createSlice } from "@reduxjs/toolkit";
import obj from "../../obj";

const initialState = obj;

const employeeSlice = createSlice({
  name : "employee",
  initialState,
  reducers : {
    addEmployee : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editEmployee : (state, action) => {
      state.filter(item => {
        if(action.payload.obj.id === item.id){
          item.name = action.payload.obj.name
          item.email = action.payload.obj.email
          item.number = action.payload.obj.number
          item.department = action.payload.obj.department
          item.city = action.payload.obj.city
        }
      })
    },
    deleteEmployee : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;