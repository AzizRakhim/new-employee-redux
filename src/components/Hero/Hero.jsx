import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import "./Hero.scss";
import Search from './Search/Search';
import Table from './Table/Table';
import Title from './Title/Title';

function Hero() {
  let [search, setSearch] = useState([]);

  const [pagnitionCount, setPagnitionCount] = useState(5)
  const [pagnitionID, setPagnitionID] = useState(1)

  return (
    <section id="hero" className="hero d-flex">
      <div className="hero__left" />
      <div className="hero__right">
        <Header />
        <Title />
        <div className="hero__info">
          <Search search={search} setSearch={setSearch} />
          <Table 
            search={search} 
            setSearch={setSearch}
            pagnitionCount={pagnitionCount}
            setPagnitionCount={setPagnitionCount}
            pagnitionID={pagnitionID}
            setPagnitionID={setPagnitionID}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
