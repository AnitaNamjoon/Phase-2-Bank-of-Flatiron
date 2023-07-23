import React, {useEffect, useState} from "react";
import Search from "./Searchbar";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

function BankTransactionContainer(){
    //State to store the transactions that are fetched from the API.
    const [transactions, setTransactions] = useState([]); 

   //State to manage the search query for the filtering of transactions.
    const [query, setQuery] = useState("");
    useEffect(() => {
     // Fetch the transactions from the API.
      fetch("http://localhost:8001/transactions?q=" +query)  
      .then((resp) =>resp.json())
      .then((data) =>setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
    },[query]);
     
    // The Handle function is to update the search query state
    function handleSearch(e) {
        setQuery(e.target.value);
    }
    return(
        <div>
            <Search handleSearch={handleSearch} />
            <TransactionForm />
            <TransactionList transactions={transactions} />

        </div>
    );
    }
    export default BankTransactionContainer;

