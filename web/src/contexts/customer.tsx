import React, { createContext, useState } from 'react';

interface ContextTypes {
  customers: any[];
  setCustomers: React.Dispatch<any>;
  searchText: string;
  setSearchText: React.Dispatch<any>;
}

const CustomerContext = ({ children }: { children: any }) => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');

  const state = {
    customers,
    setCustomers,
    searchText,
    setSearchText
  } as ContextTypes;

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const Context = createContext({} as ContextTypes);

export default CustomerContext;
