import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import { Context } from './contexts/customer';

function App() {
  const { setCustomers } = useContext(Context);

  useEffect(() => {
    axios.get("http://localhost:8000/customers/delinquents").then(({ data: customers }) => setCustomers(customers));
  }, [setCustomers]);

  return (
    <>
      <header>Clientes Inadimplentes</header>
      <main>
        <SearchBar />
        <Table />
      </main>
    </>
  );
}

export default App;
