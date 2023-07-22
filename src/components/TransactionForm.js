import React, {useState} from "react";
import Transaction from "./Transaction";

function TransactionForm() {
    const [date, setDate] = useState("")
    const [description, setDescription] = useState ("")
    const [category, setcategory] = useState("")
    const [amount, setAmount] = useState("")

    // The function handleSubmit is responsible for handling the form submission when the user adds a new transaction.
    function handleSubmit(e) {
     e.preventDefault();

    // We construct a new transaction object by extracting the data from the user-input form values.
       const newTransaction = {
        date: date,
        description: description,
        category: category,
        amount: parseFloat(amount), 
      };

      fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: date,
          description: description,
          category: category,
          amount: amount,
        }),
      });
       alert("added successfully")
    }
    
    
    return (
      <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="inline fields">
            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  
    }
  export default TransactionForm;
