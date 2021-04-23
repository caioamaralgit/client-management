import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from '../../contexts/customer';

import "./styles.css";

const SearchBar = () => {
    const { searchText, setCustomers, setSearchText } = useContext(Context);

    const search = () => {
        axios.get("http://localhost:8000/customers/delinquents", {
            params: {
                search: searchText
            }
        }).then(({ data: customers }) => setCustomers(customers));
    }

    return (
        <form className="search-bar" onSubmit={event => event.preventDefault()}>
            <input type="text" placeholder="Procurar por nome de cliente..." value={searchText} onChange={({target}) => setSearchText(target.value)} />
            <button type="button" onClick={search}>Buscar</button>
        </form>
    );
};

export default SearchBar;
