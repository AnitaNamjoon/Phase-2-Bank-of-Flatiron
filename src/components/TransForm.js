import React, { useState } from "react";

const TransForm = ({ update }) => {
  const [transData, setTransData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    update(transData);
    setTransData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransData((prevState) => ({
      ...prevState,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-sm">
        <input
          name="date"
          onChange={handleOnChange}
          value={transData.date}
          type="date"
          className="form-control"
          placeholder="Date"
          aria-label="Date"
        />
      </div>
      <div className="col-sm">
        <input
          name="description"
          onChange={handleOnChange}
          value={transData.description}
          type="text"
          className="form-control"
          placeholder="Description"
          aria-label="Description"
        />
      </div>
      <div className="col-sm">
        <input
          name="category"
          onChange={handleOnChange}
          value={transData.category}
          type="text"
          className="form-control"
          placeholder="Category"
          aria-label="Category"
        />
      </div>
      <div className="col-sm">
        <input
          name="amount"
          onChange={handleOnChange}
          value={transData.amount}
          type="number"
          className="form-control"
          placeholder="Amount"
          aria-label="Amount"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Transaction</button>
    </form>
  );
};

export default TransForm;
