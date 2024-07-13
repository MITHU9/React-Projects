import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const ExpenseFormData = (NewExpenseData) => {
    const expenseData = {
      ...NewExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseObject(expenseData);
    //console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseFormData={ExpenseFormData} />
    </div>
  );
};

export default NewExpense;
