import React, { useEffect, useState } from 'react';
import "./Pagination.scss";

function Pagination({pagnitionCount, setPagnitionCount, pagnitionID, setPagnitionID, search}) {
    const [num, setNum] = useState(search.length / pagnitionCount)
    const [fnum, setFNum] = useState(Math.floor(search.length / pagnitionCount))
    const [count, setCount] = useState(1)
  
    const pagnitCount = (e) => {
      setPagnitionID(1)
      setCount(1)
      setPagnitionCount(+e.target.value)
    }
  
    const pagPrivFunc = () => {
      if (pagnitionID > 1) {
        setCount((n) => n - 1)
        setPagnitionID(pagnitionID - pagnitionCount)
      }
    }
  
    const pagNextFunc = () => {
      if (fnum >= count) {
        setCount((n) => n + 1)
        setPagnitionID(pagnitionID + pagnitionCount)
      }
    }
  
    useEffect(() => {
      setNum(search.length / pagnitionCount)
      setFNum(Math.floor(search.length / pagnitionCount))
      if (num !== fnum) {
        setFNum((n) => n + 1)
      }
    }, [search, pagnitionCount]);

  return (
    <div className='pagination d-flex align-items-center justify-content-end'>
      <span className='pagination__page'>
        Rows per page:
      </span>
      <select 
        name="pagination" 
        id="pagination"
        onChange={pagnitCount}
        className="pagination__select"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <div className='pagination__nums'>
        <span>1</span>
        -
        <span className='pagination__l'>2</span>
        of 
        <span className='pagination__r'>2</span>
      </div>
      <div className='pagination__btns d-flex align-items-center'>
        <button className='pagination__left' onClick={pagPrivFunc}>
          <i className='bx bx-chevron-left'></i>
        </button>
        <button className='pagination__right' onClick={pagNextFunc}>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Pagination;