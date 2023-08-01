import React from "react";
import Transaction from "./Transaction";

const Table = ({ transactions, onDelete, onSort }) => {
  const handleDelete = ({ id }) => {
    onDelete(id);
  };

  const handleSort = (field) => {
    onSort(field);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th onClick={() => handleSort("date")}>Date</th>
          <th onClick={() => handleSort("description")}>Description</th>
          <th onClick={() => handleSort("category")}>Category</th>
          <th onClick={() => handleSort("amount")}>Amount</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={() => handleDelete({ id: transaction.id })}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
