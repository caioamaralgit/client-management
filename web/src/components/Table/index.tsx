import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/customer';

import "./styles.css";

const Table = () => {
    const { customers, searchText, setCustomers } = useContext(Context);

    const [ order, setOrder ] = useState("");
    const [ criteria, setCriteria ] = useState("asc");

    const sort = (column: string) => {
        setCriteria(order === column ? criteria !== "asc" ? "asc" : "desc" : "asc");

        if (order !== column) {
            setOrder(column);
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/customers/delinquents", {
            params: {
                search: searchText,
                order,
                criteria
            }
        }).then(({ data: customers }) => setCustomers(customers));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order, criteria, setCustomers]);

    return (
        <div className="table-container">
            <table className="customers-table">
                <thead>
                    <tr>
                        <th>
                            <button type="button" onClick={() => sort("name")} title="Clique para ordernar os registros pelo nome">
                                Nome do Cliente
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={() => sort("value")} title="Clique para ordernar os registros pelo valor">
                                Valor
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={() => sort("delinquent_since")} title="Clique para ordernar os registros pela data">
                                Desde
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(customer.value)}</td>
                            <td>{new Date(customer.delinquent_since).toLocaleDateString('pt-br')}</td>
                        </tr>
                    ))}
                    {customers.length === 0 ? <tr><td colSpan={3}>Não há registros</td></tr> : <></>}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
