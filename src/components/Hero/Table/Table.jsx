import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { deleteEmployee } from '../../../store/EmployeeContext/EmployeeSlice';
import EditModal from '../../EditModal/EditModal';
import { confirm } from "react-confirm-box";
import "./Table.scss";

function Table(props) { 
  let dispatch = useDispatch();

  let [id, setId] = useState();

  const idHandler = (elId) => {
    setId(elId);
  }

  const deleteHandler = async (id) => {
    const result = await confirm("Are you sure?");
    if (result) {
      dispatch(
        deleteEmployee({id : id})
      )
      return;
    }
  };

  let [count, setCount] = useState(0);
  const nameHandler = () => {
    if(count === 0){
      let temp = [...props.search].sort((a, b) => 
        b.name > a.name ? 1 : -1
      );
      props.setSearch(temp);
      setCount(1)
    }else{
      let temp = [...props.search].sort((a, b) => 
        b.name < a.name ? 1 : -1
      );
      props.setSearch(temp);
      setCount(0)
    }
  }

  let [email, setEmail] = useState(0);
  const emailHandler = () => {
    if(email === 0){
      let temp = [...props.search].sort((a, b) => 
        b.email > a.email ? 1 : -1
      );
      props.setSearch(temp);
      setEmail(1)
    }else{
      let temp = [...props.search].sort((a, b) => 
        b.email < a.email ? 1 : -1
      );
      props.setSearch(temp);
      setEmail(0)
    }
  }

  let [phone, setPhone] = useState(0);
  const numberHandler = () => {
    if(phone === 0){
      let temp = [...props.search].sort((a, b) => 
        b.number > a.number ? 1 : -1
      );
      props.setSearch(temp);
      setPhone(1)
    }else{
      let temp = [...props.search].sort((a, b) => 
        b.number < a.number ? 1 : -1
      );
      props.setSearch(temp);
      setPhone(0)
    }
  }

  let [department, setDepartment] = useState(0);
  const departmentHandler = () => {
    if(department === 0){
      let temp = [...props.search].sort((a, b) => 
        b.department > a.department ? 1 : -1
      );
      props.setSearch(temp);
      setDepartment(1)
    }else{
      let temp = [...props.search].sort((a, b) => 
        b.department < a.department ? 1 : -1
      );
      props.setSearch(temp);
      setDepartment(0)
    }
  }

  return (
    <div className="hero__table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={nameHandler}>
              Employee Name
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col" onClick={emailHandler}>
              Email Address(Personal)
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col" onClick={numberHandler}>
              Mobile number
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col" onClick={departmentHandler}>
              Department
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="hero__tbody">
          {
            props.search.map((item, i) => {
              if (props.pagnitionID <= i + 1 && props.pagnitionCount + props.pagnitionID > i + 1) {
                return (
                  <tr key={i}>
                    <td className="td-name">
                      {item.name}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.department}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button 
                          className="hero__pen" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit"
                          onClick={() => idHandler(+item.id)}
                        >
                          <i className='bx bx-pencil'></i>
                        </button>
                        <button className="hero__close" onClick={() => deleteHandler(item.id)}>
                          <i className='bx bx-x'></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
      <Pagination  
        pagnitionCount={props.pagnitionCount}
        setPagnitionCount={props.setPagnitionCount}
        pagnitionID={props.pagnitionID}
        setPagnitionID={props.setPagnitionID}
        search={props.search}
      />
      <EditModal id={id} />
    </div>
  )
}

export default Table
