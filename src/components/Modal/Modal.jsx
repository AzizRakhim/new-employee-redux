import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../store/EmployeeContext/EmployeeSlice';
import "./Modal.scss";
import TextField from '@mui/material/TextField';
import RowRadioButtonsGroup from './Radio';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Modal() {
  const dispatch = useDispatch();

  const arr = useSelector(state => state.employees);

  let [tempObj, setTempObj] = useState({
    id : "",
    name : "",
    email : "",
    number : "",
    department : "",
    city : ""
  });
  
  
  const addHandler = (e) => {
    e.preventDefault();
    
    dispatch(
      addEmployee({obj : tempObj})
    );
      
    setTempObj({
      id : "",
      name : "",
      email : "",
      number : "",
      department : "",
      city : ""
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="smth d-lg-flex w-100 align-items-center justify-content-between">
              <h5 className="modal-title" id="staticBackdropLabel">Employee Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          </div>
          <div className="modal-body">
            <form className="inner-modal-form d-flex">
              <div className="hero__modal-box col-6">
                <div className="hero__modal-input-box">
                  <TextField 
                    id="outlined-name" 
                    label="Full Name" 
                    variant="outlined" 
                    name="full name"
                    type={"text"}
                    className="hero__modal-input input-name mb-2"
                    fullWidth
                    value={tempObj.name}
                    onChange={(e) => setTempObj({...tempObj, id : arr.length + 1, name : e.target.value})}
                  />
                </div>
                <div className="hero__modal-input-box">
                  <TextField 
                    id="outlined-email" 
                    label="Email" 
                    type={"email"}
                    variant="outlined" 
                    name="email"
                    className="hero__modal-input input-name mb-2"
                    fullWidth
                    value={tempObj.email}
                    onChange={(e) => setTempObj({...tempObj, email : e.target.value})}
                  />
                </div>
                <div className="hero__modal-input-box">
                  <TextField 
                    id="outlined-number" 
                    label="Mobile" 
                    variant="outlined" 
                    name="tel"
                    type={"tel"}
                    className="hero__modal-input input-name mb-2"
                    fullWidth
                    value={tempObj.number}
                    onChange={(e) => setTempObj({...tempObj, number : e.target.value})}
                  />
                </div>
                <div className="hero__modal-input-box">
                  <TextField 
                    id="outlined-city" 
                    label="City" 
                    variant="outlined" 
                    name="city"
                    type={"text"}
                    className="hero__modal-input input-name mb-2"
                    fullWidth
                    value={tempObj.city}
                    onChange={(e) => setTempObj({...tempObj, city : e.target.value})}
                  />
                </div>
              </div>
              <div className="hero__modal-radio col-6">
                <RowRadioButtonsGroup />
                <FormControl fullWidth className='mb-3'>
                  <InputLabel id="demo-simple-select-label">Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tempObj.department}
                    label="Department"
                    onChange={(e) => setTempObj({...tempObj, department : e.target.value})}
                  >
                    <MenuItem value={"None"}>
                      None
                    </MenuItem>
                    <MenuItem value={"Development"}>
                      Development
                    </MenuItem>
                    <MenuItem value={"Marketing"}>
                      Marketing
                    </MenuItem>
                    <MenuItem value={"Accounting"}>
                      Accounting
                    </MenuItem>
                    <MenuItem value={"HR"}>
                      HR
                    </MenuItem>
                  </Select>
                </FormControl>
                <div className="date-class">
                  <input type="date" defaultValue="2017-06-01" />
                </div>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Permanent Employee" />  
                </FormGroup>
                <div>
                  <Button 
                    variant="contained"
                    type="button" className="modal-submit-btn" data-bs-dismiss="modal"
                    onClick={addHandler}
                  >
                    Submit
                  </Button>
                  <Button 
                    variant="contained"
                    type="button" 
                    className="modal-reset-btn" data-bs-dismiss="modal"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
