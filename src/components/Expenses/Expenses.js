import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { ItemContext } from "../../store/itemStorage";
import { useContext } from "react";
const Expenses = () => {
  const contextObj = useContext(ItemContext);
  const { item } = contextObj;

  return (
    <Card className="expenses">
      {item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};
export default Expenses;
