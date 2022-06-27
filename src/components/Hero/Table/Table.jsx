import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../../store/EmployeeContext/EmployeeSlice';
import EditModal from '../../EditModal/EditModal';
import "./Table.scss";

function Table(props) { 
  let dispatch = useDispatch();

  let [id, setId] = useState();
  let [arrow, setArrow] = useState(false);

  const idHandler = (elId) => {
    setId(elId);
  }

  const deleteHandler = (id) => {
    dispatch(
      deleteEmployee({id : id})
    )
  }

  return (
    <div className="hero__table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Employee Name
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col">
              Email Address(Personal)
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col">
              Mobile number
              <button className="head-btn">
                <i className="bx bx-up-arrow-alt arrow-btn" />
              </button>
            </th>
            <th scope="col">
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
            props.search.map(item => (
              <tr key={`dd` + item.id + "c" + item.name}>
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
            ))
          }
        </tbody>
      </table>
      <EditModal id={id} />
    </div>
  )
}

export default Table
