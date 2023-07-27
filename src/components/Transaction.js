import React from "react";
const Transaction = ({ transaction, onDelete}) => {
    const { id, date, description, category,amount } =transaction;
    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <button
        onClick={() => onDelete(id)}
        className="btn btn-danger"
      >
        Delete
      </button> 
           
        </tr>
    )
}
export default Transaction;
