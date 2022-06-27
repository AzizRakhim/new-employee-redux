import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./EmployeeContext/EmployeeSlice";

export default configureStore({
  reducer : {
    employees : EmployeeSlice
  }
})