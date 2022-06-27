import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import "./Search.scss";

function Search(props) {
  const arr = useSelector(state => state.employees);

  useEffect(() => {
    props.setSearch(arr)
  }, [arr]);

  const searchHandler = (e) => {
    props.setSearch(arr.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }
 
  return (
    <div className="hero__search-box d-flex align-items-center justify-content-between position-relative">
      <div className="hero__search-part position-relative">
        <form className="hero__search-part-input d-flex align-items-center">
          <label htmlFor="search-input" className="search-label">Search Employees</label>
          <i className="bx bx-search-alt-2" />
          <input 
            className="hero__searh-input-real" type="text" 
            name="search" 
            id="search-input"
            onChange={searchHandler} 
          />
        </form>
      </div>
      <div className="hero__btn-holder">
        <button className="hero__btn d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i className="bx bx-plus" /> 
          add new
        </button>
      </div>
      <Modal />
    </div>
  )
}

export default Search
