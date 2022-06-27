import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import "./Hero.scss";
import Search from './Search/Search';
import Table from './Table/Table';
import Title from './Title/Title';

function Hero() {
  let [search, setSearch] = useState([]);

  return (
    <section id="hero" className="hero d-flex">
      <div className="hero__left" />
      <div className="hero__right">
        <Header />
        <Title />
        <div className="hero__info">
          <Search search={search} setSearch={setSearch} />
          <Table search={search} setSearch={setSearch} />
        </div>
      </div>
    </section>
  )
}

export default Hero
