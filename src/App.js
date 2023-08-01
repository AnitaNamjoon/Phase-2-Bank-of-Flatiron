import React, { useEffect, useState } from "react";
import './index.css';
import './App.css';
import TransForm from './TransForm';
import Navbar from './NavigationBar';
import Table from './BankTable';
import SearchBar from './SearchBar';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data from the server:", data); // Print the fetched data to the console
                setTransactions(data); 
            })
            .catch((error) => {
                console.error("Error fetching transactions:", error);
            });
    }, []);

    // Function to update transactions with a new transaction
    function update(newTransaction) {
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);
    }

    // Function to delete a transaction with a given id
    function deleteTransaction(id) {
        const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);

        // Send a DELETE request to the server to remove the transaction
        fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((deletedTransaction) => {
                // Do something with the deletedTransaction (optional)
                console.log("Deleted transaction:", deletedTransaction); // Print the deleted transaction data to the console
            })
            .catch((error) => {
                console.error("Error deleting transaction:", error);
            });
    }

    // Function to handle sorting based on a field
    const handleSort = (field) => {
        setSortOrder((prevOrder) => (field === sortField && prevOrder === 'asc' ? 'desc' : 'asc'));
        setSortField(field);
    };

    // Filter transactions based on the search term
    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Sort the filtered transactions based on the sort field and order
    const sortedTransactions = filteredTransactions.sort((a, b) => {
        const compareResult = sortField === 'description'
            ? a[sortField].localeCompare(b[sortField], undefined, { sensitivity: 'base' })
            : a[sortField] - b[sortField];

        return sortOrder === 'asc' ? compareResult : -compareResult;
    });

    return (
        <div>
            <Navbar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <TransForm update={update} />
            <Table transactions={sortedTransactions} onDelete={deleteTransaction} onSort={handleSort} />
        </div>
    );
}

export default App;
