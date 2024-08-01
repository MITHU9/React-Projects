import React, { useContext } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { ItemContext } from "../../store/itemStorage";

const NewExpense = () => {
  const contextObj = useContext(ItemContext);
  const { addNewExpenses } = contextObj;

  const ExpenseFormData = (NewExpenseData) => {
    const expenseData = {
      ...NewExpenseData,
      id: Math.random().toString(),
    };
    addNewExpenses(expenseData);
    //console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseFormData={ExpenseFormData} />
    </div>
  );
};

export default NewExpense;
